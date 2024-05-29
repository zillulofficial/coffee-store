import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee= useLoaderData()
    const {_id, name, chief, supplier, taste, category, details, url}= coffee

    const handleUpdateCoffee= e=>{
        e.preventDefault()
        const form= e.target
        const name= form.name.value
        const chief= form.chief.value
        const supplier= form.supplier.value
        const taste= form.taste.value
        const category= form.category.value
        const details= form.details.value
        const url= form.url.value

        const updatedCoffee= {name, chief, supplier, taste, category, details, url}
        console.log(updatedCoffee)

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated successfully',
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
                    <h3 className="Rancho text-5xl">Update Coffee</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at<br className="hidden lg:block" /> its layout. The point of using Lorem Ipsum
                        is that it has a more-or-less normal distribution of letters, as opposed to
                        using Content here.</p>
                </div>
                <form onSubmit={handleUpdateCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Chief</span>
                                </div>
                                <input type="text" name="chief" defaultValue={chief} placeholder="Enter Coffee Chief" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Supplier</span>
                                </div>
                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee Supplier" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Taste</span>
                                </div>
                                <input type="text" name="taste" defaultValue={taste} placeholder="Enter Coffee Taste" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Category</span>
                                </div>
                                <input type="text" name="category" defaultValue={category} placeholder="Enter Coffee Category" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Details</span>
                                </div>
                                <input type="text" name="details" defaultValue={details} placeholder="Enter Coffee Details" className="input input-bordered w-full " />
                            </label>
                        </div>
                        <div className="col-span-2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Photo</span>
                                </div>
                                <input type="text" name="url" defaultValue={url} placeholder="Enter Coffee URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <input className="btn Rancho text-2xl text-[#331A15] bg-[#D2B48C] w-full mt-7 hover:bg-[#D2B48C60] border-none" type="submit" value="Update Coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;