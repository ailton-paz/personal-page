import SideNav from "./ui/sidenav";
import '@/app/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html>
      <body>
        <div className="flex flex-col md:flex-row bg-[#ffd967]">

          <div className="h-30 md:h-screen w-screen md:w-64 p-4">
            <SideNav />
          </div>

          <div className='w-screen md:m-2 md:ml-0 md:border-1 md:rounded-md bg-[#e4b540]'>
           {children}
          </div>

        </div>
      </body>
    </html>
  );
}
