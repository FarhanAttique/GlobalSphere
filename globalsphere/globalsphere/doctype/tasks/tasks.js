// Copyright (c) 2025, Farhan and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tasks', {
    after_save: function(frm) {
        console.log("Script triggered: after_save event.");

        if (frm.doc.project) {
            console.log("Project field found in Tasks:", frm.doc.project);

            frappe.call({
                method: "frappe.client.get_list",
                args: {
                    doctype: "Project GlobalSphere",
                    filters: { "name": frm.doc.project },  // Matching with Project GlobalSphere's 'name' field
                    fields: ["name"]
                },
                callback: function(response) {
                    console.log("Project fetch response:", response);
                    
                    if (response.message.length > 0) {
                        let project_id = response.message[0].name;
                        console.log("Matching Project GlobalSphere found:", project_id);

                        frappe.call({
                            method: "frappe.client.get",
                            args: {
                                doctype: "Project GlobalSphere",
                                name: project_id
                            },
                            callback: function(res) {
                                console.log("Fetched Project GlobalSphere document:", res);
                                
                                if (res.message) {
                                    let project = res.message;
                                    let task_entry = {
                                        "title": frm.doc.title,
                                        "description": frm.doc.description,
                                        "user_assign": frm.doc.assign_to,
                                        "status": frm.doc.status
                                    };

                                    console.log("Task to be added:", task_entry);

                                    project.tasks = project.tasks || [];
                                    project.tasks.push(task_entry);

                                    frappe.call({
                                        method: "frappe.client.save",
                                        args: {
                                            doc: project
                                        },
                                        callback: function(save_res) {
                                            console.log("Save response:", save_res);

                                            if (save_res.exc) {
                                                console.error("Error saving Project GlobalSphere:", save_res.exc);
                                            }
                                        }
                                    });
                                } else {
                                    console.warn("Project GlobalSphere document not found.");
                                }
                            }
                        });
                    } else {
                        console.warn("No matching project found in Project GlobalSphere.");
                    }
                }
            });
        } else {
            console.warn("No project assigned to the task.");
        }
    }
});
