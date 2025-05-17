export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="project-layout">
      <main>{children}</main>
    </div>
  );
}