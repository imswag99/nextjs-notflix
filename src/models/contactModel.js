import mongoose from 'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
const contactSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
}, {
    timestamps: true
});

//Export the model
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export default Contact;