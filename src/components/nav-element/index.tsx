/* tslint:disable:no-empty */
import Link from 'next/link';
import Text from '../Text';
import { cn } from '../../utils';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

type NavElementProps = {
    label: string;
    href?: string;
    as?: string;
    scroll?: boolean;
    chipLabel?: string;
    disabled?: boolean;
    source?: 'mobile' | 'main';
    navigationStarts?: () => void;
};

const NavElement = ({
    label,
    href,
    as,
    scroll,
    disabled,
    source,
    navigationStarts = () => {},
}: NavElementProps) => {
    const router = useRouter();
    const normalizePath = (path: string) => path.replace(/\/$/, '');
    const isActive = normalizePath(href || '') === normalizePath(router.asPath) || (as && normalizePath(as) === normalizePath(router.asPath));
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (divRef.current) {
            divRef.current.className = cn(
                'h-0.5 w-1/4 transition-all duration-300 ease-out',
                isActive
                    ? '!w-full bg-gradient-to-l from-fuchsia-500 to-pink-500 '
                    : 'group-hover:w-1/2 group-hover:bg-fuchsia-500',
            );
        }
    }, [isActive]);

    const handleClick = () => {
        navigationStarts();
        if (source === 'mobile') {
            document.getElementById('my-drawer')?.click();
        }
    };

    return (
        <Link
            href={href}
            as={as}
            scroll={scroll}
            passHref
            className={cn(
                'group flex h-full flex-col items-center justify-between',
                disabled &&
                    'pointer-events-none cursor-not-allowed opacity-50',
            )}
            onClick={handleClick}
        >
            <div className="flex flex-row items-center gap-3">
                <Text variant="nav-heading"> {label} </Text>
            </div>
            <div ref={divRef} />
        </Link>
    );
};

export default NavElement;