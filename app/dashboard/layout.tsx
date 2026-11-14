import SideNav from '@/app/ui/dashboard/sidenav';
import { lusitana } from '../ui/fonts';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="relative grow p-6 md:overflow-y-auto md:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 flex select-none items-center justify-center md:left-64"
        >
          <span
            className={`${lusitana.className} -rotate-12 text-[50vw] font-bold leading-none text-blue-600 opacity-20`}
          >
            Acme
          </span>
        </div>

        {children}

      </div>


    </div>
  );
}