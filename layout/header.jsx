import Image from 'next/image';
export default function Header() {
	return (
		<header className="flex justify-center ">
			<Image src='/pokemon-logo.svg' width={269.5} height={98.8} />
		</header>
	);
}
