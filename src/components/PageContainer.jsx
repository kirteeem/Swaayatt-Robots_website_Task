export default function PageContainer({ children }) {
  return (
    <div className="w-full px-[clamp(48px,8vw,200px)]">
      <div className="mx-auto max-w-[1680px]">
        {children}
      </div>
    </div>
  );
}
