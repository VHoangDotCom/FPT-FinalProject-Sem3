import React from 'react'

const OurTeam = () => {
     const imgs = [
          "https://www.markuptag.com/images/user-img-1.jpg",
          "https://www.markuptag.com/images/user-img-2.jpg",
          "https://www.markuptag.com/images/user-img-3.jpg",
     ]
  return (
    <>
     <div class="container" style={{ marginTop: '150px'}}>
		<div class="row">
			<div class="col-sm-6 offset-sm-3 mt-4 mb-4">
				<h2 class="text-center" style={{color:'#4267b2'}}>Our Expert Team</h2>
				<p class="text-center">Members of the management and executive board of the company</p>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4">
				<div class="card-box text-center">
					<div class="user-pic">
						<img src={imgs[0]} class="img-fluid" alt="User Pic"/>
					</div>
					<h4>Viet Hoang</h4>
					<h6>Leader</h6>
					<hr/>
					<p>Do product management, order, project. Make admin management interface</p>
					<hr/>
					<a href="#" class="btn" style={{backgroundColor:'#4267b2', color:'#fff' }}>Know More</a>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card-box text-center">
					<div class="user-pic">
						<img src={imgs[1]} class="img-fluid" alt="User Pic"/>
					</div>
					<h4>Van Anh</h4>
					<h6>VIP Member</h6>
					<hr/>
					<p>Call api, system analysis, database processing, sheet data, data statistics</p>
					<hr/>
					<a href="#" class="btn" style={{backgroundColor:'#4267b2', color:'#fff' }}>Know More</a>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card-box text-center">
					<div class="user-pic">
						<img src={imgs[2]} class="img-fluid" alt="User Pic"/>
					</div>
					<h4>Quang Minh</h4>
					<h6>Member</h6>
					<hr/>
					<p>
					Call api, user interface design, database analysis, problem solving, error handling</p>
					<hr/>
					<a href="#" class="btn" style={{backgroundColor:'#4267b2', color:'#fff' }}>Know More</a>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}
export default OurTeam;
