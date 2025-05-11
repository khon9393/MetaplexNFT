
import Text from './Text';
import NavElement from './nav-element';
import { XCircleIcon } from "@heroicons/react/24/outline";

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

        <ul className="p-4 overflow-y-auto menu w-[60%] bg-base-100 gap-10 sm:flex items-center">
          <XCircleIcon
            className="absolute w-10 h-10 text-foreground mx-auto block top-[7%] left-[13%] cursor-pointer hover:text-red-500"
            style={{ width: '2rem', height: '2rem' }}
            onClick={() => document.getElementById('my-drawer')?.click()}
          />
          <li>
            <Text variant="heading" className='font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10'>Menu</Text>
          </li>
          <NavElement
            label="Home"
            href="/"
            source='mobile'
          />
          <li className="mt-auto">
            <NavElement
              label="Get&nbsp;Started?"
              href="/getstarted"
              source='mobile'
            />
          </li>
          <li>
            <NavElement
              label="Swap&nbsp;NFT"
              href="/nftswap"
              source='mobile'
            />
          </li>
          <li>
            <NavElement
              label="Zodiac&nbsp;NFT"
              href="/AstrologyZodiac"
              source='mobile'
            />
          </li>
            <li>
            <NavElement
              label="Candi&nbsp;NFT"
              href="/Candi"
              source='mobile'
            />
          </li>
          <li>
            <NavElement
              label="Snake&nbsp;NFT"
              href="/AstrologySign"
              source='mobile'
            />
          </li>
          <li>
            <NavElement
              label="CPAG"
              href="/CPAG"
              source='mobile'
            />
          </li>
          <li>
            <NavElement
              label="FAQ"
              href="/faq"
              source='mobile'
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
