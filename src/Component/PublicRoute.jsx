const PublicRoute = ({children, ...routeProps}) => {
    return (
        <div {...routeProps}>
            {children}
        </div>
    );
};

export default PublicRoute;