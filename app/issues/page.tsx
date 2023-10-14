import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import IssueItem from "@/components/IssueItem";
import axios from "axios";
import { Issue } from "@/types/Issue";

const IssuePage = async () => {
  const { data } = await axios.get("http://localhost:3000/api/issues");
  const isEmpty = !Array.isArray(data) || data.length < 1 || !data;

  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>

      {isEmpty && <h2 className="mt-5">Ooops, no issues found</h2>}
      {!isEmpty && (
        <section className="space-y-2 mt-5">
          {data.map((issue: Issue) => (
            <IssueItem key={issue.id} data={issue} />
          ))}
        </section>
      )}
    </div>
  );
};

export default IssuePage;
