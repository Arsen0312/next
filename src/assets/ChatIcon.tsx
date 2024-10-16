
type Props = {
    color?: string;
}

const UserIcon = (props: Props) => {
    const { color = 'black' } = props;

    return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22.5 11.5667C22.5 16.8499 18.0222 21.1334 12.5 21.1334C11.8507 21.1343 11.2032 21.0742 10.5654 20.9545C10.1063 20.8682 9.87678 20.8251 9.71653 20.8496C9.55627 20.8741 9.32918 20.9948 8.87499 21.2364C7.59014 21.9197 6.09195 22.161 4.65111 21.893C5.19874 21.2194 5.57275 20.4112 5.73778 19.5448C5.83778 19.0148 5.59 18.5 5.21889 18.1231C3.53333 16.4115 2.5 14.1051 2.5 11.5667C2.5 6.28357 6.97778 2 12.5 2C18.0222 2 22.5 6.28357 22.5 11.5667Z"
            stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12.4955 12H12.5045M16.491 12H16.5M8.5 12H8.50897" stroke="white" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

);
};

export default UserIcon;