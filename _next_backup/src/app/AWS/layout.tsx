import "../AWS/aws.css"


export default function AWSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="aws-page bg-gray-50 min-h-screen">
      <main className="aws-content mx-auto max-w-3xl pt-[105px] flex items-center flex-col">
        {children}
      </main>
    </div>
  );
}