

                                <div className="card">
                                <div className="card-header">
                                    Items
                                </div>
                                <div className="card-body">
                                    <div>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Search" value={searchValue}
                                            onChange={(e)=> this.searchItem(e.target.value)} />
                                        
                                        
                                            <FaTimes onClick={ () => this.setState({
                                                        searchResult:[],
                                                        searchValue:''
                                                    })}/>
                                    </div>


                                    {
                                        searchItemLoading ?
                                            <div>Loading....</div>
                                        :

                                        searchResult.length > 0 &&
                                        <div>
                                            <ul className="list-group">
                                            {
                                                searchResult.map( (item,key) =>{
                                                    return(
                                                        <div key={key} className="d-flex justify-content-between">
                                                        
                                                            <li className="list-group-item">
                                                                {item.erp_code} / {item.name}
                                                            </li>

                                                            <FaShoppingCart onClick={()=>this.addToListBtn(item)}>
                                                            
                                                            </FaShoppingCart>

                                                        </div>
                                                    )
                                                })
                                            }
                                            </ul>
                                            
                                        </div>
                                    }
                                
                                    <blockquote className="blockquote mb-0">
                                    {
                                        selectedItem.length > 0 ?
                                            selectedItem.map( (item,key) => {
                                                return(
                                                    <div key={key} className="d-flex">
                                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Erp-Code" value={item.erp_code} disabled/>
                                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Item Name"
                                                        value={item.name} disabled
                                                        />
                                                        <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="qty" required 
                                                            onChange={(e) => this.setState({ 
                                                                    selectedItemQty: Number(e.target.value)
                                                                    })
                                                                }/>

                                                        <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Cost" required 
                                                        onChange={ (e) => this.setState({selectedItemCost : Number(e.target.value)})}
                                                                />

                                                    

                                                        <button className="btn btn-primary btn-sm" type="button"  required
                                                            disabled={selectedItemQty > 0 && selectedItemCost > 0 ? false : true}
                                                            onClick={ () => this.addToReceivingList(item) } //goes as single object of selected item
                                                            >Add</button>

                                                        <button className="btn btn-primary btn-sm" type="button">Remove</button>
                                                    </div>
                                                )
                                            })
                                                
                                        
                                        :

                                    
                                            <div className="alert alert-info" role="alert">
                                            No Item has been selected...
                                            </div>
                                    

                                    }


                                
                                
                                    </blockquote>
                                </div>
                                </div>