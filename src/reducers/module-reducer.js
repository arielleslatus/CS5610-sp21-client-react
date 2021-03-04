import {updateCourse} from "../services/course-service";

const initialState = {
    modules: []
}

const ModuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            const newModule = {
                title: "New Module",
                _id: (new Date().getTime())
            }
            return {
                ...state,
                modules: [
                    ...state.modules,
                    newModule
                ]
            }
        case "DELETE_MODULE":
            return {
                ...state,
                modules: state.modules.filter(module => {
                    if (module._id !== action.moduleToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(module => {
                    if (module._id === action.updatedModule._id) {
                        return action.updatedModule
                    } else {
                        return module
                    }
                })
            }
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        default:
            return state

    }
}

export default ModuleReducer