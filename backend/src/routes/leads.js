import express from 'express'
import Lead from '../models/Leads.js'
import { request } from 'node:http'

const leadRouter = express.Router()

// GET ALL LEADS
leadRouter.get('/', async(request, response) => {
    try {
        const leads = await Lead.find()
        response.json(leads)
    }
    catch(error) {
        response.status(500).json({error: 'Failed to fetch leads'})
    }
})

// ADD A NEW LEAD
leadRouter.post('/', async(request, response) => {
    try {
        const lead = new Lead({...request.body})
        const savedLead = await lead.save()
        response.status(201).json(savedLead)
    }
    catch (error) {
        response.status(400).json({error: 'Failed to create lead'})
    }
})

export default leadRouter