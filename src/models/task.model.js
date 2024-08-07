import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    category: {
        type: String,
        enum: ["work", "family", "entertaiment", "study","other"],
        default: "other",
    },
    done: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: true,
    },
},{
    timestamps: true, //para que se registre la fecha de creacion y actualizacion del usuario
})


export default mongoose.model('Task', taskSchema)