export const AddLeadModal = ({
    newName,
    setNewName,
    newEmail,
    setNewEmail,
    newStatus,
    setNewStatus,
    submitForm,
    closeModal}) => {


    return (
        <dialog open id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                <button type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="text-3xl font-bold mb-4">Add New Lead</h3>
                <form onSubmit={submitForm} className="space-y-4">

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Name</legend>
                        <input required type="text" className="input" placeholder="Type here" value={newName} onChange={setNewName} />
                        <p className="label">Required</p>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Email</legend>
                        <input required type="text" className="input" placeholder="Type here" value={newEmail} onChange={setNewEmail} />
                        <p className="label">Required</p>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Lead Status</legend>
                        <select
                        className="select select-bordered w-full"
                        value={newStatus}
                        onChange={setNewStatus}
                        >
                            <option>New</option>
                            <option>Engaged</option>
                            <option>Proposal Sent</option>
                            <option>Closed-Won</option>
                            <option>Closed-Lost</option>
                        </select>
                    </fieldset>

                    <div className='flex justify-end space-x-3 mt-10'>
                        <button type="button" onClick={closeModal} className='btn btn-outline btn-error text-lg'>Cancel</button>
                        <button type="submit" className='btn btn-outline btn-success text-lg'>Add Lead</button>
                    </div>
                    

                </form>
            </div>
        </dialog>
    )
}