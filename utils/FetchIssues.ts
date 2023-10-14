import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";

export const getIssues = async () => {
  const issues = await prisma.issue.findMany();
  return issues;
};

export const createIssue = async (title: string, description: string) => {
  const newIssue = await prisma.issue.create({ data: { title, description } });
  return newIssue;
};
