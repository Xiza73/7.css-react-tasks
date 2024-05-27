import { ModalAction, ModalActions, ShowModalAction } from './actions';
import { ModalState } from './interfaces';

type ModalHandler = (state: ModalState, action: ModalAction) => ModalState;

const modalReducerHandler: Record<ModalActions, ModalHandler> = {
  [ModalActions.SHOW_MODAL]: (state, action) => {
    const { component, closeIcon, minWidth } = (action as ShowModalAction)
      .payload;

    return {
      ...state,
      isOpen: true,
      component,
      closeIcon,
      minWidth,
    };
  },
  [ModalActions.HIDE_MODAL]: (state) => ({
    ...state,
    isOpen: false,
  }),
};

export const modalReducer = (
  state: ModalState,
  action: ModalAction
): ModalState => modalReducerHandler[action.type](state, action) ?? state;
