import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee= e=>{
        e.preventDefault()
        const form= e.target
        const name= form.name.value
        const chief= form.chief.value
        const supplier= form.supplier.value
        const taste= form.taste.value
        const category= form.category.value
        const details= form.details.value
        const url= form.url.value

        const newCoffee= {name, chief, supplier, taste, category, details, url}
        console.log(newCoffee)

        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
            }
        })
    }
    return (
        <div className="container mx-auto mt-20">
            <div className="bg-[#F4F3F0]  py-16 px-28">
                <div className=" text-center mb-10">
                    <h3 className="Rancho text-5xl">Add new Coffee</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at<br className="hidden lg:block" /> its layout. The point of using Lorem Ipsum
                        is that it has a more-or-less normal distribution of letters, as opposed to
                        using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Chief</span>
                                </div>
                                <input type="text" name="chief" placeholder="Enter Coffee Chief" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Supplier</span>
                                </div>
                                <input type="text" name="supplier" placeholder="Enter Coffee Supplier" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Taste</span>
                                </div>
                                <input type="text" name="taste" placeholder="Enter Coffee Taste" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Category</span>
                                </div>
                                <input type="text" name="category" placeholder="Enter Coffee Category" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Details</span>
                                </div>
                                <input type="text" name="details" placeholder="Enter Coffee Details" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="col-span-2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Photo</span>
                                </div>
                                <input type="text" name="url" placeholder="Enter Coffee URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <input className="btn Rancho text-2xl text-[#331A15] bg-[#D2B48C] w-full mt-7 hover:bg-[#D2B48C60] border-none" type="submit" value="Add a Coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;