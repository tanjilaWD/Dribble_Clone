import portfolios from "../data/portfolio";
import PortfolioCard from "./Ui/PortfolioCard";
const Portfolio = () => {
    return (
        <section className="w-7xl mx-auto px-8 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
               portfolios.map((Portfolio)=>(
                <PortfolioCard 
                imageUrl={Portfolio.imageUrl}
                teamImageUrl={Portfolio.teamImageUrl}
                teamName={Portfolio.teamName}
                LoveCount={Portfolio.LoveCount}
                ViewCount={Portfolio.ViewCount}
                
                />
               ))
            }
            </div>
        </section>
    );
};

export default Portfolio;