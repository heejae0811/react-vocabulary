const Layout = ({className, children}) => {
    return (
        <div className={`wrap ${className}`}>
            <div className="inner">{children}</div>

            <footer>
                <p>Copyright 2023. LeeHeejae All pictures cannot be copied without permission.</p>
            </footer>
        </div>
    )
}

export default Layout