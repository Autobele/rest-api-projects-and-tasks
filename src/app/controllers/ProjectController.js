import Project from '../models/Project';

export async function store(req, res) {
    const { name, priority, description, deliverydate } = req.body;
    let newProject = await Project.create({
        name,
        priority,
        description,
        deliverydate
    })  
    
    if(newProject) {
        res.json({
            message: 'Projeto criado com sucesso.',
            projects
        })
    }
}

export async function index(req, res) {
    const projects = await Project.findAll()
    res.json(projects)
}