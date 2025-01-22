
import Text from './Text';
import NavElement from './nav-element';
interface Props {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<Props> = ({ children }) => {

  return (
    <div className="flex-col justify-between relative">
    <div className="flex-1 drawer drawer-content">
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="absolute top-0 left-0 w-full h-full">
      {children}
      </div>
     
      {/* SideBar / Drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay gap-6"></label>

        <ul className="p-4 overflow-y-auto menu w-60 bg-base-100 gap-10 sm:flex items-center">
          <li>
            <Text variant="heading" className='font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10'>Menu</Text>
          </li>
          <NavElement
            label="Home"
            href="/"
          />
          <li>
          <NavElement
                label="Candi&nbsp;NFT"
                href="/candi0"
              />
          </li>
          <li>
          <NavElement
                label="Snake&nbsp;NFT"
                href="/snake"
              />
          </li>
          <li>
          <NavElement
                label="NFT&nbsp;Swap"
                href="/nftswap"
              />
          </li>

          <li>
          <NavElement
            label="Need&nbsp;Wallet?"
            href="/getstarted"
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
    </div>
  );
};
