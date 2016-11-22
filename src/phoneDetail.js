import React from 'react';
    import request from 'superagent' ; 
	
	 var Specification = React.createClass({
      render: function(){
		  
            var phone = this.props.phone ;             
            var availability = phone.availability.map(function(avb,index) {
              return (
                       <dd key={index}>{avb}</dd>
                     ) ;
                }) ;
            //var dimensions = phone.sizeAndWeight.dimensions.map(function(dim,index) {
              //return (
                        //<dd key={index}>{dim}</dd>
                   //  ) ;
               // }) ;
          var display = (
              <div>
                 <ul className="specs">
                  <li >
                    <span>Availability</span>
                    <dl>
                      <dt>In Stock</dt>
                         {availability}
                    </dl>
                  </li>
                  <li>
                    <span>Transmission</span>
                    <dl>
                      <dt>Type</dt>
                      <dd>{phone.battery.type}</dd>
                    </dl>
                  </li>    
                  <li>
                    <span>Body</span>
                    <dl>
                      <dt>Type</dt>
                      <dd>{phone.storage.ram}</dd>
                      
                    </dl>
                  </li>
                  <li>
                    <span>Year</span>
                    <dl>
                      <dt>Modern</dt>
                      <dd>{phone.connectivity.wifi}</dd>
                      
                    </dl>
                  </li>
                  
                  <li>
                    <span>Engine Size</span>
                    <dl>
                       <dt>Litres</dt>
                      <dd>{phone.sizeAndWeight.weight}</dd>
                    </dl>
                  </li>    
                  <li>
                    <span>Milage</span>
                    <dl>
                      <dt>Kilometers</dt>
                      <dd>{phone.display.screenSize}</dd>
                     
                    </dl>
                  </li>
                  <li>
                    <span>Tax</span>
                    <dl>
                      <dt>Ireland</dt>
                      <dd>{phone.hardware.cpu}</dd>
                      
                    </dl>
                  </li>    
                  <li>
                    <span>Fuel</span>
                    <dl>
                      <dt>Type</dt>
                      <dd>{phone.camera.primary}</dd>
                      
                      
                    </dl>
                  </li>
                  <li>
                    <span>Price</span>
                    <dd>{phone.additionalFeatures}</dd>
                  </li>              
                  </ul>            
            </div>
           )
            return (
                 <div>
                  {display}
              </div>
             );
      }
  });

    var ImagesSection = React.createClass({
      render: function(){
            var thumbImages = this.props.phone.images.map(function(img,index) {
              return (
                  <li>
                   <img key={index} src={"/phoneSpecs/" + img}
                       alt="missing" />
                </li>
                ) ;
                } );
            var mainImage = (
              <div className="phone-images">
              <img src={"/phoneSpecs/" + this.props.phone.images[0]} 
                    alt={this.props.phone.name}
                    className="phone" />
            </div>
            ) ;
              return (
                  <div>
                   {mainImage}
                   <h1>{this.props.phone.name}</h1>
                   <p>{this.props.phone.description}</p>
                   <ul className="phone-thumbs">
                       {thumbImages}
                   </ul>
                  </div>
                  );
          }
    })

    var PhoneDetail = React.createClass({
       getInitialState: function() {
           return { phone: null };
       },
       componentDidMount: function() {
          request.get(
             '/phoneSpecs/phones/' + this.props.params.id + '.json', function(err, res) {
                 var json = JSON.parse(res.text);
                if (this.isMounted()) {
                    this.setState({ phone : json});
          }
        }.bind(this));
      } ,
      render: function(){
           var display = <p>No phone details</p> ; 
            var phone = this.state.phone ;
          if (phone) {
                  display =  (
                      <div>
                         <ImagesSection phone={phone} />
                         <Specification  phone={phone} />       
                    </div>
                    ) ;
              }
            return (
                <div>
              {display}
            </div>
            );
      }
    });

    export default PhoneDetail;