import dateLocale from 'date-fns/locale/pt-BR';
import { createBaseStringSet } from '@sendbird/uikit-react-native';
import {
  getDateSeparatorFormat,
  getGroupChannelPreviewTime,
  getGroupChannelTitle,
  getMessagePreviewBody,
  getMessagePreviewTime,
  getMessagePreviewTitle,
  getMessageTimeFormat,
  getMessageType,
  isVoiceMessage,
} from '@sendbird/uikit-utils';

const USER_NO_NAME = '(Sem nome)';
const CHANNEL_NO_MEMBERS = '(Sem membros)';
const UNKNOWN_USER_ID = '##__USER_ID_IS_NOT_PROVIDED__##';

export const StringSetPtBR = createBaseStringSet({
    dateLocale,
    overrides: {
        GROUP_CHANNEL: {
            HEADER_TITLE: (uid, channel) => getGroupChannelTitle(uid, channel, USER_NO_NAME, CHANNEL_NO_MEMBERS),
            LIST_DATE_SEPARATOR: (date, locale) => getDateSeparatorFormat(date, locale ?? dateLocale),
            LIST_BUTTON_NEW_MSG: (newMessages) => `${newMessages.length} novas mensagens`,
            MESSAGE_BUBBLE_TIME: (message, locale) => getMessageTimeFormat(new Date(message.createdAt), locale ?? dateLocale),
            MESSAGE_BUBBLE_FILE_TITLE: (message) => message.name,
            MESSAGE_BUBBLE_EDITED_POSTFIX: ' (editado)',
            MESSAGE_BUBBLE_UNKNOWN_TITLE: () => '(Tipo de mensagem desconhecida)',
            MESSAGE_BUBBLE_UNKNOWN_DESC: () => 'Não foi possível ler esta mensagem.',
            MENTION_LIMITED: (mentionLimit) => `Você possui até ${mentionLimit} menções por mensageNS.`,
          },
          GROUP_CHANNEL_SETTINGS: {
            HEADER_TITLE: 'Informações do canal',
            HEADER_RIGHT: 'Editar',
            MENU_MODERATION: 'Moderação',
            MENU_MEMBERS: 'Membros',
            MENU_SEARCH: 'Buscar no canal',
            MENU_LEAVE_CHANNEL: 'Sair do canal',
            MENU_NOTIFICATION: 'Notificações',
            MENU_NOTIFICATION_LABEL_ON: 'Ativado',
            MENU_NOTIFICATION_LABEL_OFF: 'Desativado',
            MENU_NOTIFICATION_LABEL_MENTION_ONLY: 'Somente menções',
            DIALOG_CHANGE_NAME: 'Alterar nome do canal',
            DIALOG_CHANGE_NAME_PROMPT_TITLE: 'Alterar nome do canal',
            DIALOG_CHANGE_NAME_PROMPT_PLACEHOLDER: 'Digite o nome',
            DIALOG_CHANGE_NAME_PROMPT_OK: 'Salvar',
            DIALOG_CHANGE_NAME_PROMPT_CANCEL: 'Cancelar',
            DIALOG_CHANGE_IMAGE: 'Alterar imagem do canal',
            DIALOG_CHANGE_IMAGE_MENU_TITLE: 'Alterar imagem do canal',
            DIALOG_CHANGE_IMAGE_MENU_CAMERA: 'Tirar foto',
            DIALOG_CHANGE_IMAGE_MENU_PHOTO_LIBRARY: 'Escolher foto',
          },
          GROUP_CHANNEL_NOTIFICATIONS: {
            HEADER_TITLE: 'Notificações',
            MENU_NOTIFICATIONS: 'Notificações',
            MENU_NOTIFICATIONS_DESC: 'Ative as notificações push se desejar ser notificado quando mensagens forem entregues neste canal.',
            MENU_NOTIFICATIONS_OPTION_ALL: 'Todas as novas mensagens',
            MENU_NOTIFICATIONS_OPTION_MENTION_ONLY: 'Somente menções'
          },
          GROUP_CHANNEL_MODERATION: {
            HEADER_TITLE: 'Moderação',
            MENU_OPERATORS: 'Operadores',
            MENU_MUTED_MEMBERS: 'Membros silenciados',
            MENU_BANNED_USERS: 'Usuários banidos',
            MENU_FREEZE_CHANNEL: 'Congelar canal'
          },
          GROUP_CHANNEL_OPERATORS: {
            HEADER_TITLE: 'Operadores',
          },
          GROUP_CHANNEL_REGISTER_OPERATOR: {
            HEADER_TITLE: 'Definir como operador',
            HEADER_RIGHT: ({ selectedUsers }) => {
              const len = selectedUsers.length;
              if (len === 0) return 'Adicionar';
              return `Adicionar (${len})`;
            },
          },
          GROUP_CHANNEL_MUTED_MEMBERS: {
            HEADER_TITLE: 'Membros mutados',
          },
          GROUP_CHANNEL_BANNED_USERS: {
            HEADER_TITLE: 'Usuários banidos',
          },
          GROUP_CHANNEL_LIST: {
            HEADER_TITLE: 'Canais',
            CHANNEL_PREVIEW_TITLE: (currentUserId, channel) =>
              getGroupChannelTitle(currentUserId, channel, USER_NO_NAME, CHANNEL_NO_MEMBERS),
            CHANNEL_PREVIEW_TITLE_CAPTION: (channel, locale) => getGroupChannelPreviewTime(channel, locale ?? dateLocale),
            CHANNEL_PREVIEW_BODY: (channel) => {
              if (!channel.lastMessage) return '';
              if (isVoiceMessage(channel.lastMessage)) return 'Mensagem de Voz';
              return getMessagePreviewBody(channel.lastMessage);
            },
            TYPE_SELECTOR_HEADER_TITLE: 'Tipo de canal',
            TYPE_SELECTOR_GROUP: 'Grupo',
            TYPE_SELECTOR_SUPER_GROUP: 'Supergrupo',
            TYPE_SELECTOR_BROADCAST: 'Transmissão',
            DIALOG_CHANNEL_TITLE: (currentUserId, channel) =>
              getGroupChannelTitle(currentUserId, channel, USER_NO_NAME, CHANNEL_NO_MEMBERS),
            DIALOG_CHANNEL_NOTIFICATION: (channel) => {
              if (!channel) return '';
              if (channel.myPushTriggerOption === 'off') return 'Ligar notificações';
              return 'Desligar notificações';
            },
            DIALOG_CHANNEL_LEAVE: 'Sair do canal',
          },
          GROUP_CHANNEL_MEMBERS: {
            HEADER_TITLE: 'Membros',
          },
          GROUP_CHANNEL_CREATE: {
            HEADER_TITLE: 'Novo Canal',
            HEADER_RIGHT: ({ selectedUsers }) => {
              const len = selectedUsers.length;
              if (len === 0) return 'Criar';
              return `Criar (${len})`;
            },
          },
          GROUP_CHANNEL_INVITE: {
            HEADER_TITLE: 'Convidar usuários',
            HEADER_RIGHT: ({ selectedUsers }) => {
              const len = selectedUsers.length;
              if (len === 0) return 'Convidar';
              return `Convidar (${len})`;
            },
          },
          MESSAGE_SEARCH: {
            HEADER_INPUT_PLACEHOLDER: 'Pesquisar',
            HEADER_RIGHT: 'Pesquisar',
            SEARCH_RESULT_ITEM_TITLE: (message) => getMessagePreviewTitle(message),
            SEARCH_RESULT_ITEM_BODY: (message) => {
              if (isVoiceMessage(message)) return 'Mensagem de Voz';
              return getMessagePreviewBody(message);
            },
            SEARCH_RESULT_ITEM_TITLE_CAPTION: (message, locale) => {
              return getMessagePreviewTime(message.createdAt, locale ?? dateLocale);
            },
          },
          LABELS: {
            PERMISSION_APP_NAME: 'Aplicativo',
            PERMISSION_CAMERA: 'câmera',
            PERMISSION_DEVICE_STORAGE: 'armazenamento do dispositivo',
            PERMISSION_MICROPHONE: 'microfone',
            USER_NO_NAME,
            CHANNEL_NO_MEMBERS,
            TYPING_INDICATOR_TYPINGS: (users, NO_NAME = USER_NO_NAME) => {
              const userNames = users.map((u) => u.nickname || NO_NAME);
              if (userNames.length === 0) return;
              if (userNames.length === 1) return `${userNames[0]} está digitando...`;
              if (users.length === 2) return `${userNames.join(' e ')} estão digitando...`;
              return 'Várias pessoas estão digitando...';
            },
            REPLY_FROM_SENDER_TO_RECEIVER: (reply, parent, currentUserId = UNKNOWN_USER_ID) => {
              const senderNickname = reply.sender.nickname || USER_NO_NAME;
              const receiverNickname = parent.sender.nickname || USER_NO_NAME;
              return `${reply.sender.userId !== currentUserId ? senderNickname : 'Você'} respondeu para ${receiverNickname}`;
            },
            MESSAGE_UNAVAILABLE: 'Mensagem indisponível',
            USER_BAR_ME_POSTFIX: ' (Você)',
            USER_BAR_OPERATOR: 'Operador',
            REGISTER_AS_OPERATOR: 'Registrar como operador',
            UNREGISTER_OPERATOR: 'Desregistrar operador',
            MUTE: 'Silenciar',
            UNMUTE: 'Ativar som',
            BAN: 'Banir',
            UNBAN: 'Desbanir',
            CHANNEL_MESSAGE_LIST_FROZEN: 'Canal está congelado',
            CHANNEL_MESSAGE_COPY: 'Copiar',
            CHANNEL_MESSAGE_EDIT: 'Editar',
            CHANNEL_MESSAGE_SAVE: 'Salvar',
            CHANNEL_MESSAGE_DELETE: 'Excluir',
            CHANNEL_MESSAGE_REPLY: 'Responder',
            CHANNEL_MESSAGE_DELETE_CONFIRM_TITLE: 'Excluir mensagem?',
            CHANNEL_MESSAGE_DELETE_CONFIRM_OK: 'Excluir',
            CHANNEL_MESSAGE_DELETE_CONFIRM_CANCEL: 'Cancelar',
            CHANNEL_MESSAGE_FAILED_RETRY: 'Tentar novamente',
            CHANNEL_MESSAGE_FAILED_REMOVE: 'Remover',
            CHANNEL_INPUT_ATTACHMENT_CAMERA_PHOTO: 'Tirar uma foto',
            CHANNEL_INPUT_ATTACHMENT_CAMERA_VIDEO: 'Gravar um vídeo',
            CHANNEL_INPUT_ATTACHMENT_PHOTO_LIBRARY: 'Biblioteca de fotos',
            CHANNEL_INPUT_ATTACHMENT_FILES: 'Arquivos',
            CHANNEL_INPUT_PLACEHOLDER_ACTIVE: 'Digite uma mensagem',
            CHANNEL_INPUT_PLACEHOLDER_DISABLED: 'Chat não disponível neste canal.',
            CHANNEL_INPUT_PLACEHOLDER_MUTED: 'Você está silenciado pelo operador.',
            CHANNEL_INPUT_PLACEHOLDER_REPLY: 'Responder à mensagem',
            CHANNEL_INPUT_EDIT_OK: 'Salvar',
            CHANNEL_INPUT_EDIT_CANCEL: 'Cancelar',
            CHANNEL_INPUT_REPLY_PREVIEW_TITLE: (user) => `Responder para ${user.nickname || USER_NO_NAME}`,
            CHANNEL_INPUT_REPLY_PREVIEW_BODY: (message) => {
              if (message.isFileMessage()) {
                const messageType = getMessageType(message);
                switch (messageType) {
                  case 'file.image':
                    return message.type.toLowerCase().includes('gif') ? 'GIF' : 'Foto';
                  case 'file.video':
                    return 'Video';
                  case 'file.audio':
                    return 'Audio';
                  case 'file.voice':
                    return 'Mensagem de Voz';
                  default:
                    return message.name;
                }
              } else if (message.isUserMessage()) {
                return message.message;
              }
              return 'Mensagem desconhecida';
            },
            VOICE_MESSAGE: 'Mensagem de Voz',
            VOICE_MESSAGE_INPUT_CANCEL: 'Cancelar',
          },
          FILE_VIEWER: {
            TITLE: (message) => message.sender?.nickname || USER_NO_NAME,
            SUBTITLE: (message) => getMessageTimeFormat(new Date(message.createdAt), dateLocale),
          },
          PLACEHOLDER: {
            NO_BANNED_USERS: 'Nenhum usuário banido',
            NO_USERS: 'Nenhum usuário',
            NO_CHANNELS: 'Nenhum canal',
            NO_MESSAGES: 'Nenhuma mensagem',
            NO_MUTED_MEMBERS: 'Nenhum membro silenciado',
            NO_MUTED_PARTICIPANTS: 'Nenhum participante silenciado',
            NO_RESULTS_FOUND: 'Nenhum resultado encontrado',
            ERROR: {
                MESSAGE: 'Algo deu errado',
                RETRY_LABEL: 'Tentar novamente',
            },
            },
          DIALOG: {
            ALERT_DEFAULT_OK: 'OK',
            ALERT_PERMISSIONS_TITLE: 'Permitir acesso?',
            ALERT_PERMISSIONS_MESSAGE: (permission, appName = 'Aplicativo') => {
                return `${appName} precisa de permissão para acessar o seu ${permission}.`;
            },
            ALERT_PERMISSIONS_OK: 'Ir para configurações',
            PROMPT_DEFAULT_OK: 'Enviar',
            PROMPT_DEFAULT_CANCEL: 'Cancelar',
            PROMPT_DEFAULT_PLACEHOLDER: 'Digite',
          },
          TOAST: {
            COPY_OK: 'Copiado',
            DOWNLOAD_START: 'Baixando...',
            DOWNLOAD_OK: 'Arquivo salvo',
            DOWNLOAD_ERROR: 'Não foi possível baixar o arquivo.',
            OPEN_CAMERA_ERROR: 'Não foi possível abrir a câmera.',
            OPEN_FILES_ERROR: 'Não foi possível abrir os arquivos.',
            OPEN_PHOTO_LIBRARY_ERROR: 'Não foi possível abrir a biblioteca de fotos.',
            DELETE_MSG_ERROR: 'Não foi possível excluir a mensagem.',
            RESEND_MSG_ERROR: 'Não foi possível reenviar a mensagem.',
            SEND_MSG_ERROR: 'Não foi possível enviar a mensagem.',
            USER_MUTED_ERROR: 'Você está silenciado pelo operador.',
            CHANNEL_FROZEN_ERROR: 'O canal está congelado.',
            UPDATE_MSG_ERROR: 'Não foi possível editar a mensagem.',
            TURN_ON_NOTIFICATIONS_ERROR: 'Não foi possível ligar as notificações.',
            TURN_OFF_NOTIFICATIONS_ERROR: 'Não foi possível desligar as notificações.',
            LEAVE_CHANNEL_ERROR: 'Não foi possível sair do canal.',
            UNKNOWN_ERROR: 'Algo deu errado.',
            GET_CHANNEL_ERROR: 'Não foi possível recuperar o canal.',
            FIND_PARENT_MSG_ERROR: 'Não foi possível encontrar a mensagem original para esta resposta.'
          },
          PROFILE_CARD: {
            BUTTON_MESSAGE: 'Messagem',
            BODY_LABEL: 'ID do Usuário',
            BODY: (user) => user.userId,
          },
    },
});
