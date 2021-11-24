import React from 'react';

export const DeleteListModal = (props) => {
    return (
        <>
            <div class="modal-dialog modal-confirm">
                <div class="modal-content">
                    <div class="modal-header flex-column">
                        <div class="icon-box">
                            <i class="material-icons">&#xE5CD;</i>
                        </div>
                        <h4 class="modal-title w-100">Are you sure?</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>Do you really want to delete these records? This process cannot be undone.</p>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export const AddListModal = () => {
    return (
        <>
            <div class="modal-dialog modal-success">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="icon-box">
                            <i class="material-icons">&#xE876;</i>
                        </div>
                        <h4 class="modal-title w-100">Awesome!</h4>
                    </div>
                    <div class="modal-body">
                        <p class="text-center">Your booking has been confirmed. Check your email for detials.</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success btn-block" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </>
    );
};

