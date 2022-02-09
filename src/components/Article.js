import React, {useState}  from 'react';



function Article (props){

            return (
                        <div className="col-4 mt-4">
                              <div className="card">
                                    <img className="px-3 py-3" src={props.Art.image} alt="plop" />
                                    <div className="card-body">
                                          <h5 className="card-title">{props.Art.nom}</h5>
                                          <p className="price">Price : <span className={props.Art.priceClass}>{props.Art.prix}  €</span></p>
                                          <p className="stock">stock : <span>{props.Art.stock} </span> unités</p>
                                          <button type="button" className={props.Art.cln} onClick={()=>props.btn(props.index)}> {props.Art.content} </button>
                                    </div>
                              </div>
                              
                        </div>
            )
}

export default Article;
