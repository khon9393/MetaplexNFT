
import Text from './Text';
import NavElement from './nav-element';
interface Props {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<Props> = ({ children }) => {

  return (
    <div className="flex-1 drawer drawer-mobile min-h-screen w-full">
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      {/* Main Content */}
      <div className="drawer-content flex flex-col justify-between items-start w-full">
        {/* Ensure children takes full width */}
        <div className="w-full">{children}</div>
      </div>
      {/* SideBar / Drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay gap-6"></label>

        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 gap-10 sm:flex items-center">
          <li>
            <Text variant="heading" className='font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10'>Menu</Text>
          </li>
          <li>
          <NavElement
            label="Home"
            href="/"
          />
          </li>
          <li>
          {/* <NavElement
            label="Basics"
            href="/basics"
          /> */}
          </li>
        </ul>
      </div>
    </div>
  );
};
