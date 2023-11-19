import NextLink from "next/link";
import LinkEstilizado from '../LinkEstilizado'

export default function Link({children, href, ...props}) {
    return (
        <NextLink passHref legacyBehavior href={href}>
             <LinkEstilizado {...props}>{children}</LinkEstilizado>
        </NextLink>
    );
}