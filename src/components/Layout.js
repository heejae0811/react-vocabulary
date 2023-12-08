const Layout = ({className, children}) => {
    return (
        <div className={`wrap ${className}`}>
            <div className="inner">{children}</div>
        </div>
    )
}

export default Layout