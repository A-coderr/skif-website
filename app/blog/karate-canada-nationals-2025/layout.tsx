import MDXLayout from "../../components/MDXLayout";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXLayout>{children}</MDXLayout>;
}
