const Modal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form action="" onSubmit={handleSubmit}>
          <div className="modal-box">
            <div>
              First Name
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
                name="Fname"
              />
            </div>
            <div>
              Last Name
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
                name="Lname"
              />
            </div>
            <div>
              Email
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
                name="email"
              />
            </div>
            <div>
              Phone Number
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
                name="phone"
              />
            </div>
            <div>
              Appointment date
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
                name="date"
              />
            </div>
            <div>
              Address
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
                name="address"
              />
            </div>
            <button className="btn btn-primary" type="submit">Make Appointment</button>
            <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
          </div>
          
        </form>
        
      </dialog>
    </div>
  );
};

export default Modal;
