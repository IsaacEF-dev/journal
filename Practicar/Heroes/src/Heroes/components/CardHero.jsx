import { Link } from "react-router-dom"


export const CardHero = ({id,superhero,publisher,alter_ego,first_appearance,characters}) => {
   
    const heroimage=`../../../assets/${id}.jpg`;
    
  return (
    <div className="container">
        <div className="row">
            <div className="card m-2">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroimage} className="card-img" alt={superhero} />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            
                                <h4 className="card-title">{superhero}</h4>
                                <p className="card-text">{alter_ego}</p>
                                <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                                <Link to={`/hero/${id}`} 
                                className="btn btn-success d-block"
                                >View Hero</Link>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
