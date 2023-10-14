import { NextRequest, NextResponse } from "next/server";

import { createIssueSchema } from "../../../models/validationSchema";
import { createIssue, getIssues } from "@/utils/FetchIssues";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newIssue = await createIssue(body.title, body.description);
  return NextResponse.json(newIssue, { status: 201 });
}

export async function GET() {
  const issues = await getIssues();
  return NextResponse.json(issues, { status: 200 });
}
