import SideNav from "./ui/sidenav";
import '@/app/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <div className="flex flex-col md:flex-row bg-[#ffd967]">

          <div className="h-30 md:h-screen bg-[#ffd967] md:w-64 p-4">
            <SideNav />
          </div>

          <div className='w-full md:m-2 md:ml-0 md:border-2 md:rounded-3xl bg-[#e4b540]'>
           {children}
          </div>

        </div>
      </body>
    </html>
  );
}
