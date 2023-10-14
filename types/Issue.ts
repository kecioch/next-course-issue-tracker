type IssueStatus = "OPEN" | "IN_PROGRESS" | "CLOSED";

export interface Issue {
  id: number;
  title: string;
  description: string;
  status: IssueStatus;
  createdAt: string;
  updatetAt: string;
}
