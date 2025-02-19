
import Text from './Text';
import NavElement from './nav-element';
interface Props {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<Props> = ({ children }) => {

  return (
    <div className="flex-1 drawer h-52 flex-col justify-between">
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="items-center drawer-content flex-col justify-between box-sizing: border-box">
        {children}
      </div>
      {/* SideBar / Drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay gap-6"></label>

        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 gap-10 sm:flex items-center">
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
              href="/Candi"
            />
          </li>
          <li>
            <NavElement
              label="Snake&nbsp;NFT"
              href="/AstrologySign"
            />
          </li>
          <li>
            <NavElement
              label="Zodiac&nbsp;NFT"
              href="/AstrologyZodiac"
            />
          </li>
          <li>
            <NavElement
              label="NFT&nbsp;Swap"
              href="/nftswap"
            />
          </li>
          <li></li>
          <li>
          <NavElement
            label="Need&nbsp;Wallet?"
            href="/getstarted"
          />
          </li>

          <li>
          <NavElement
            label="FAQ"
            href="faq"
          />
          </li>
        </ul>
      </div>
    </div>
  );
};
