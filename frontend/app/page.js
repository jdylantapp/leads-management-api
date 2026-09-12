'use client'

import { useState, useEffect } from "react";

import { LeadList } from "@/components/LeadList";
import { AddLeadModal } from "@/components/AddLeadModal";


export default function Home() {

  const [leads, setLeads] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newStatus, setNewStatus] = useState('New')

  const getLeads = async () => {
    try {
      const res = await fetch('/api/leads')
      if (!res.ok) throw new Error('Failed to get leads')
      const data = await res.json()
      setLeads(data)
    }
    catch (error) {
      console.error('Fetch error: ', error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getLeads()
  }, [])

  const submitForm = async (event) => {
    event.preventDefault()

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          name : newName,
          email : newEmail,
          status : newStatus
        })
      })

      if (res.ok) {
        setNewName('')
        setNewEmail('')
        setNewStatus('New')
        setIsModalOpen(false)
        getLeads()
      }
      else {
        alert('Could not save new lead')
      }
    }
    catch (error) {
      console.error('Submission error: ', error)
    }
  }

  const closeModal = () => setIsModalOpen(false)



  return (
    <div className="flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-black">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight mt-10 text-black dark:text-zinc-50">
            Leads Management
          </h1>

          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary text-lg mt-6">Add New Lead
          </button>

          {loading ? (
            <div className="text-center text-xl">Loading your leads...</div>
          ) : leads.length == 0 ? (
            <div className="text-center text-xl">No current leads. Add a new lead</div>
          ) : (
            <LeadList leads={leads}/>
          )}

          {isModalOpen && (
            <AddLeadModal
              newName={newName}
              setNewName={(e) => setNewName(e.target.value)}
              newEmail={newEmail}
              setNewEmail={(e) => setNewEmail(e.target.value)}
              newStatus={newStatus}
              setNewStatus={(e) => setNewStatus(e.target.value)}
              submitForm={submitForm}
              closeModal={closeModal}
            />
          )}
    </div>
  );
}
