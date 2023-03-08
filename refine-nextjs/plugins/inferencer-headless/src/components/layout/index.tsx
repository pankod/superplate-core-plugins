interface IProps {
    children: React.ReactNode;
    Header: React.FC;
}
export const Layout: React.FC<IProps> = ({ children, Header }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};
