import SideNav from "./ui/sidenav";
import '@/app/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html>
      <body>
        <div className="flex flex-col w-screen h-screen md:flex-row bg-[#ffd967]">

          <div className="h-15 md:h-screen w-screen md:w-64 bg-blue-300">
            <SideNav />
          </div>

          <div>
           
          </div>

        </div>
      </body>
    </html>
  );
}
