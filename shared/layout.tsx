import Head from 'next/head';
import Link from 'next/link';
import Icon from '@/components/ui/Icon/Icon';

type TLayout = {
    children: JSX.Element;
    title: string;
};

const Layout: React.FC<TLayout> = ({ children, title }): JSX.Element => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Asap:wght@400;600&family=Fredoka+One&display=swap"
                    rel="stylesheet"
                />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            {children}
            <footer>
                <Link href="/">
                    <div>
                        <Icon name="home" size={30} />
                    </div>
                </Link>
                <Link href="/warehouse">
                    <div>
                        <Icon name="warehouse" size={30} />
                    </div>
                </Link>
                <Link href="/cleaning">
                    <div>
                        <Icon name="cleaning" size={30} />
                    </div>
                </Link>
                <Link href="/shopping">
                    <div>
                        <Icon name="bill" size={30} />
                    </div>
                </Link>
                <Link href="/drinks">
                    <div>
                        <Icon name="drink" size={30} />
                    </div>
                </Link>
                <Link href="/movies">
                    <div>
                        <Icon name="movies" size={30} />
                    </div>
                </Link>
            </footer>
        </>
    );
};

export default Layout;
