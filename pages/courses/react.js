
const React = () => {
    return (
        <div>
            <h1>
            react
            </h1>
            <p>milad eats shit</p>
            <h4>just kidding i love milad</h4>
            {/* styled jsx(vercel) */}
            <style jsx>{`
                h1 {
                    color:red;
                    background-color:silver; 
                }

                p {
                    width:500px;
                    background-color:blue; 
                }
            `}</style>
        </div>
    );
};

export default React;