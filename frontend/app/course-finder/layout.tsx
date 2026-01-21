import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Courses | Tasbih Global",
  description: "Find the perfect course in USA, UK, or Australia.",
};

export default function CourseFinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}