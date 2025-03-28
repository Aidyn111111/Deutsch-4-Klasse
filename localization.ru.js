/* This file is auto-generated by a tool */
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}
var Localization = Localization || {};
Localization.AddUsers = {
  'NotifyErrorInvitationCanBeResentOnlyToUsersWithEmails': 'Пользователю, не имеющему электронную почту, невозможно выслать приглашение.',
  'UserHasEKoolAndStuudiumBinding': 'У пользователя есть привязки к eKool и Stuudium',
  'NotifyErrorChooseMembersToRemove': 'Отметьте пользователей, которых желаете удалить!',
  'NotifyErrorInvitationWasResentOnlyToUsersWithEmails': 'Приглашение высылается только на адрес электронной почты пользователя.',
  'NotifyWarningNoUsersAdded': 'Пользователи не добавлены!',
  'UserHasStuudiumBinding': 'У пользователя есть привязка к Stuudium',
  'ValidationErrorWrongEmail': 'Проверьте адрес электронной почты. Разрешены только латинские буквы.',
  'NotifyErrorChooseMembersToResendInvitation': 'Отметьте пользователей, которым желаете выслать повторные приглашения!',
  'UserHasEKoolBinding': 'У пользователя есть привязка к eKool',
  'ErrorChooseStudents': 'Выберите учеников!',
  'ValidationErrorFormMustHaveFilledRows': 'Все поля должны быть заполнены!',
};
Localization.AdminCustomerUsers = {
  'ModalTitle': 'У пользователя удаляется роль «{0}».',
};
Localization.AdminUsersSearch = {
  'EnterSchoolNameMessage': 'Введите название школы',
  'LicensePackageAll': 'Все пакеты',
};
Localization.Annotation = {
  'ErrorMessageAnnotationAlreadyDeleted': 'Изменение аннотации не удалось, поскольку она уже удалена.',
};
Localization.AutoComplete = {
  'SearchingMessage': 'Поиск…',
  'ErrorLoadingResultsMessage': 'Не удалось загрузить результаты',
  'NoResultsMessage': 'Результаты не найдены',
};
Localization.ChapterExerciseCreate = {
  'NotifyErrorMandatoryChapter': 'Параграф должен быть указан!',
  'NotifyErrorMandatoryTitle': 'Заголовок обязателен!',
  'NotifyErrorMandatoryKit': 'Учебный комплект должен быть указан!',
};
Localization.ChapterExercisesIndex = {
  'TooltipTextUserNotInActiveRegisters': 'Для составления работы у Вас должно быть заведено не менее одного журнала.',
  'ConfimationDialogAreYouSure': 'Вы уверены, что хотите выполнить это действие?',
};
Localization.ChapterIndex = {
  'LinkCopiedSuccessMessage': 'Ссылка скопирована.',
};
Localization.CouponBatchDetails = {
  'DeleteCouponModalMessage': 'Подарочная карта удаляется. Если клиент уже получил подарочную карту, то после удаления ею нельзя будет пользоваться.',
};
Localization.CouponCreate = {
  'EnterCustomerNameMessage': 'Введите имя клиента',
  'PricePerMonthFormat': '{0} месяц',
  'CustomerTypeSchool': 'Школа',
  'WarningCouponCountBigFormat': 'Вы уверены, что желаете создать {0} подарочных карт?',
  'QuantityMustBeSetError': 'Введите количество.',
  'NoResultsMessage': 'Результаты не найдены',
  'CouponCountMustBeSetError': 'Введите количество подарочных карт.',
  'PackageMustBeSelectedError': 'Выберите пакет.',
  'CouponValidUntilMustBeSetError': 'Выберите срок окончания подарочной карты.',
  'CustomerTypeMustBeSelectedError': 'Выберите тип клиента.',
  'SelectCustomerTypeError': 'Сначала выберите тип клиента.',
  'CustomerTypePrivateUser': 'Частный клиент',
  'LengthOfValidityMustBeSetError': 'Введите срок действия.',
};
Localization.CreateCustomer = {
  'NoCustomerTypeSelectedError': 'Выберите тип клиента.',
};
Localization.CreateSchoolAdminAccount = {
  'PasswordRepeatDifferentError': 'Пароль и повторный пароль не совпадают.',
  'RequiredFieldLeftEmptyErrorWithArgs': 'Поле {0} должно быть заполнено.',
  'Field': 'Поле',
  'PasswordTooShortErrorWithArgs': 'Пароль должен содержать не менее {0} символов.',
  'UserNameInvalidEmailWithArgs': '{0} укажите корректный электронный адрес.',
};
Localization.Currency = {
  'CurrencyFormatDefault': '{0} {1}',
};
Localization.EditTextExercise = {
  'NeededSpaceRemoval': 'Не написанных слитно',
  'PerformedRemoval': '{0} удаленных {1}',
  'NeededSpaceAddition': 'Не написанных раздельно',
  'PerformedSpaceRemoval': 'слитное написание {0}',
  'NeededRemoval': 'Неудаленных {0}',
  'ExpectedClause': '; должно быть {0}',
  'NeededReplacement': 'Неисправленных <i>{0} → {1}</i>',
  'EvaluationCorrectly': 'Верно',
  'PerformedSpaceAddition': 'раздельное написание {0}',
  'EvaluationIncorrectly': 'Неверно',
  'NeededAddition': 'Недобавленных {0}',
  'PerformedAddition': '{0} добавленных {1}',
  'PerformedReplacement': '{0} исправленных <i>{1} → {2}</i>',
};
Localization.ErrorReportModal = {
  'ErrorReportContactInfoExcessiveLength': 'Контактные данные могут содержать до {0} символов, вы ввели {1}.',
  'AddErrorDescription': 'Опишите ошибку!',
  'ErrorReportDescriptionExcessiveLength': 'Описание ошибки может содержать до {0} символов, вы ввели {1}.',
  'ErrorReportCreated': 'Сообщение сохранено',
};
Localization.ExerciseMenu = {
  'ExerciseToolTipText': 'Задания работы',
  'ChapterExerciseToolTipText': 'Задания параграфа',
};
Localization.Exercises = {
  'DragFromGroupTitle': 'Перетащите ответ в нужную колонку',
  'ChangeButtonText': 'Изменить',
  'DragHerePlaceholder': 'переместите сюда',
  'SaveButtonText': 'Сохранить',
  'TeachersCommentHeading': 'Комментарий учителя {0}',
  'CheckAnswerButtonText': 'Проверить ответ',
  'NoAnswerSelectedByStudent': 'Ученик не выбрал ответ',
  'ButtonTextShowMyAnswers': 'Показать мои ответы',
  'MethodologicalTextSectionHeading': 'NB! Ученикам этот элемент не виден.',
  'ButtonTextShowStudentsAnswers': 'Показать ответы учеников',
  'FixMistakesButtonText': 'Изменить ответ',
  'ExerciseOldCommentWarning': 'Это старый комментарий учителя ({0}). Вы уверены, что хотите снова отправить этот комментарий?',
  'HideExampleAnswersText': 'Скрыть образец ответа',
  'TryAgainButtonText': 'Начать сначала',
  'NoAnswerSelectedByYou': 'Оставить ответы невыбранными',
};
Localization.FoxGraph = {
  'ButtonTextLoad': 'Загрузить',
};
Localization.Global = {
  'SavedNotificationMessage': 'Сохранено',
  'LoadingContentMessage': 'Загружается…',
  'AjaxErrorSessionExpired': 'Сессия истекла!',
  'AjaxErrorNoAccess': 'Данный ресурс недоступен пользователю!',
  'AjaxErrorSessionChanged': 'Сбой сеанса пользователя, обновите страницу!',
  'AjaxErrorNoConnection': 'Отсутствует соединение с сервером!',
  'DatepickerLanguageCode': 'ru',
  'ConfirmationModalQuestion': 'Вы уверены, что желаете это сделать?',
  'AjaxErrorConcurrency': 'Данные были обновлены, пожалуйста, обновите страницу!',
  'AjaxErrorOther': 'Что-то пошло не так :(',
};
Localization.InvoiceRecipient = {
  'ConfirmClearInvoiceRecipientText': 'Вы действительно желаете удалить данные получателя счета?',
};
Localization.JoinRegister = {
  'SuccessfullyJoinedRegister': 'Вы присоединились к журналу!',
};
Localization.JoinSchool = {
  'SuccessfullyJoinedSchool': 'Присединились к школе!',
};
Localization.KitAddKitToRegisters = {
  'ChooseRegistersPlaceholder': 'Выбрать',
  'NotifySuccessMessageAddedToSingleRegister': 'Учебный комплект добавлен в журнал',
  'NotifySuccessMessageAddedToMultipleRegisters': 'Учебный комплект добавлен в журналы',
};
Localization.KitCreateRegisterFromKit = {
  'NotifyErrorMessageDataNotSaved': 'Сохранение данных не удалось!',
  'ErrorMessageTeacherNotFound': 'Учитель не найден, выберите учителя из списка!',
  'NotifySuccessMessageDataSaved': 'Данные сохранены!',
};
Localization.KitDetails = {
  'InUseSingleRegister': 'Используется в 1 журнале',
  'InUseRegisters': 'Используется в {0} журналах',
  'RemoveSuccessMessage': 'Произведение удалено из числа учебных комплектов.',
};
Localization.LicensingIndex = {
  'LicenseButtonLicenseNUsersText': 'Обеспечить лицензией {0} пользователей',
  'LicenseButtonLicenseOneUserText': 'Обеспечить лицензией 1 пользователя',
  'LicenseButtonText': 'Обеспечить лицензией',
  'LicenseSelectionPlaceHolder': 'Выберите лицензию',
};
Localization.LicensingRemoveLicenses = {
  'ButtonRemoveLicenseNUsersText': 'Удалить лицензию у {0} пользователей',
  'LicenseMissing': 'лицензия отсутствует',
  'RemoveLicenseButtonText': 'Удалить',
  'ButtonTooltipNoLicenseSelected': 'Для удаления выберите лицензию, уже имеющуюся у пользователя',
  'ChosenLicenseMissing': 'выбранная лицензия отсутствует',
  'ButtonTooltipNoUsersSelected': 'Сначала выделите пользователей, а затем удалите их лицензии',
  'LicenseSelectionPlaceHolder': 'Выберите лицензию',
};
Localization.ManageIndex = {
  'ConfirmationDialog': 'Вы уверены, что хотите выполнить это действие?',
};
Localization.ManageLinkLoginConfirmation = {
  'ConfirmationDialog': 'Вы уверены, что хотите выполнить это действие?',
};
Localization.MediaGallery = {
  'ExitFullscreen': 'Выход из полноэкранного режима',
  'SendToProjector': 'Передать на проектор',
  'ShowFullscreen': 'Включить полноэкранный режим',
};
Localization.OrderDetails = {
  'ConfirmationModalMessage': 'Вы уверены, что хотите выполнить это действие?',
  'ReturnToDraftModalBoxTip': 'Заказ открывается, школа может изменить заказ и снова его подтвердить.',
  'OrderWillBeConfirmedBoxTip': 'Заказ подтверждается.',
  'ActionFailedMessage': 'Действие не удалось.',
  'DeleteOrderCompletelyBoxTip': 'Заказ удаляется полностью.',
};
Localization.OrderOrder = {
  'PackageBoxTipText': 'Убедитесь, что «{0}» пакет содержит интересующие вас издания <a href="{1}" class="system-link" target="_blank">ознакомиться с изданиями, входящими в пакет</a>.',
  'ErrorMandatoryPackage': 'Пакет должен быть выбран.',
  'ConfirmationNeededBoxTipMessageSingle': 'Заказ после подтверждения проходит проверку, поскольку вы выбрали пакет {0}. Opiq утвердит заказ после того, как убедится в действии скидки.',
  'ErrorMustAgreeToTermsAndConditions': 'Ознакомьтесь с условиями заказа и подтвердите свое согласие.',
  'ErrorPaymentMethodNotSelected': 'Выберите способ оплаты.',
  'ErrorMandatoryCountry': 'Необходимо выбрать страну.',
  'ErrorChoosePackage': 'Сначала выберите пакет!',
  'SingleMonth': 'месяц',
  'ErrorMandatoryRegisterCode': 'Регистрационный код обязателен.',
  'DeleteOrderConfimationDialog': 'Вы уверены, что хотите сделать это?',
  'ErrorPackageNotAvailable': 'Данный пакет больше нельзя заказать.',
  'ErrorValidFromMustBeGreaterThanValidUntil': 'Дата окончания периода не должна быть раньше даты его начала.',
  'PackageNameInQuotes': '«{0}»',
  'ErrorMandatoryTown': 'Необходимо указать город или поселение.',
  'ConfimationDialogDeleteLicenseRow': 'Вы уверены, что хотите сделать это?',
  'ConfirmationNeededBoxTipMessageMultiple': 'Заказ после подтверждения проходит проверку, поскольку вы выбрали пакеты {0}. Opiq утвердит заказ после того, как убедится в действии скидки.',
  'SchoolConfirmationModalTextWithConfirmationNeededPackage': 'Вы подтверждаете заказ на сумму {0}, который будет отправлен в Opiq для проверки. Opiq утвердит заказ после того, как убедится в действии скидки. Проверка  заказа может занять некоторое время. Все школьные администраторы этой школы получат подтверждение заказа на адрес электронной почты.',
  'ErrorMandatoryInvoiceRecipientName': 'Введите имя получателя.',
  'PrivateUserConfirmationModalText': 'Перед подтверждением заказа убедитесь, что выбранный пакет содержит интересующие вас издания, а также начало и срок действия вам подходят.',
  'ProductSummarySingleMonth': 'Лицензия на использование Opiq «{0}» сроком на 1 месяц ({1}–{2}) стоимостью {3}.',
  'MultipleMonths': 'месяцев',
  'Day': 'день',
  'ErrorPaymentScheduleNotCalculated': 'Рассчитайте график платежей.',
  'ErrorMandatoryLicenseValidUntil': 'Окончание периода должно быть выбрано.',
  'SingleYear': 'год',
  'ErrorMandatoryLicenseValidFrom': 'Начало периода должно быть выбрано.',
  'ProductSummaryMultipleMonths': 'Лицензия на использование Opiq «{0}» на период {1} месяцев ({2}–{3}) стоимостью {4}.',
  'SchoolConfirmationModalText': 'Подтвердите заказ на {0} сумму, которую следует оплатить в соответствии с выбранными условиями оплаты. Подтверждение заказа получают на электронную почту все администраторы этой школы.',
  'OverlappingPendingLicensesWarning': 'Срок действия пакета «{0}» ({1}–{2}) пересекается со сроком действия пакета «{3}» ({4}–{5})!',
  'ErrorMandatoryCounty': 'Необходимо указать уезд.',
  'MultipleYears': 'года',
  'ErrorMandatoryStreetAndHouse': 'Необходимо указать название улицы и номер дома.',
  'ErrorInvalidEmail': 'Проверьте адрес электронной почты. Разрешены только латинские буквы.',
  'ErrorAtLeastOneLicenseMandatory': 'В заказе должно быть заполнено не менее одного ряда!',
  'DeleteOrderBoxTip': 'Заказ удаляется.',
  'ErrorMandatoryZipCode': 'Необходимо указать почтовый индекс.',
  'ErrorQuantityBiggerThanOne': 'Количество должно быть выше нуля.',
  'ErrorMandatoryEmailAddress': 'Введите электронный адрес.',
};
Localization.PageHeaderComponent = {
  'GenericLicensesTitle': 'Лицензии',
  'GenericFailedImportsTitle': 'Неудавшиеся публикации',
  'GenericRegistersTitle': 'Журналы',
  'GenericStudyProgressTitle': 'Текущие параграфы',
  'GenericSuccessfulImportsTitle': 'Успешные публикации',
  'HeaderTitleExerciseNotSavedMessage': 'не сохранено',
  'GenericInProgressImportsTitle': 'Опубликованные издания',
  'HeaderTitleExerciseSavedMessage': 'сохранено',
  'GenericOrdersTitle': 'Заказы',
  'GenericTasksTitle': 'Работы',
};
Localization.PrivateUserKitIndex = {
  'TOCSetCurrentChapter': 'Задать текущую тему',
  'TOCCurrentChapterTooltip': 'Этот параграф помечен закладкой',
  'RemoveSuccessMessage': 'Издание удалено из списка учебных материалов.',
};
Localization.RegisterAdminAddRegister = {
  'RegisterErrorMandatoryKit': 'Учебный комплект должен быть указан.',
  'SubmitButtonTextSaveAndSendInvitation': 'Сохранить и отправить приглашения',
  'RegisterErrorMandatoryRegisterName': 'Название журнала обязательно.',
};
Localization.RegisterAdminModifyName = {
  'ValidationErrorNotSuccessfulNameModification': 'Не удалось изменить название журнала.',
};
Localization.RegisterAdminUpdateKit = {
  'DropdownPlaceholderText': 'Выбрать',
};
Localization.RegisterKitSettings = {
  'StudentsPackageRemovedSuccessfully': 'Добавление лицензии приостановлено!',
  'ConfirmationModalBody': 'Вы уверены, что хотите выполнить это действие?',
  'ConfirmationModalBoxTip': 'Присоединение с помощью кода приостанавливается. При повторной активации генерируется новый код, существующий код больше не может быть использован.',
  'NotifyCodeWasCopied': 'Скопировать код',
};
Localization.RegisterKitTaskResults = {
  'SelectListTextAll': 'Все',
  'TaskTypesSelectionLabelAllTypes': 'Все типы',
  'NotifyErrorPeriodHasBeenLimitedToOneYear': 'Период не может превышать один год.',
  'AppliedTaskTypesCountMessage': '{0} выбрано',
};
Localization.RegisterLicensing = {
  'ConfirmationModelConfirmText': 'Вы уверены, что желаете добавить ученикам лицензии?',
  'MissingPackagesToShareError': 'У школы нет соответствующих лицензий.',
};
Localization.RegisterListSchoolAdmin = {
  'SearchButtonSearchingTitle': 'Поиск…',
  'UserAutoCompletePrompt': 'Введите фамилию пользователя',
  'SearchButtonDefaultTitle': 'Поиск',
};
Localization.SchoolSettingsConfirmation = {
  'GenericBindingConfirmationDialog': 'Вы уверены?',
  'ConfirmationDialogAstraSchoolSameAsStuudiumSchool': 'Вы уверены, что в Opiq {0} и Stuudium {1} указана одна и та же школа?',
};
Localization.SchoolStudySeasonActivateNextComing = {
  'ConfimationDialogActivateNextComingStudySeason': 'Вы уверены, что желаете начать новый учебный год? Текущий учебный год завершается и все группы учеников и журналы переносятся в архив.',
};
Localization.Search = {
  'ExercisesSearchTooltipTextUserLacksRegisters': 'Для составления задания у Вас должно быть заведено не менее одного журнала.',
};
Localization.SolvingExercise = {
  'HeaderTitleExerciseNotSavedMessage': 'не сохранено',
  'HeaderTitleExerciseSavedMessage': 'сохранено',
};
Localization.StudentResultsIndex = {
  'ShowClassAverageButton': 'Показать среднее класса',
  'ScoreResultsTooltip': 'Здесь представлен обзор тех работ, которые были оценены исходя из процента выполнения.',
  'HideClassAverageButton': 'Скрыть среднее класса',
  'GradeResultsTooltip': 'Здесь представлен обзор тех работ, которые были оценены баллами.',
};
Localization.StudentResultsSingleSubject = {
  'NotifyErrorPeriodEndBeforePeriodStart': 'Дата окончания периода не может быть раньше даты его начала.',
  'NotifyErrorPeriodLengthLimitation': 'Период не может превышать один год.',
};
Localization.StudyGroupAdd = {
  'ErrorMandatoryClassNumber': 'Номер класса обязателен.',
  'ErrorNegativeNumber': 'Номер класса не может быть отрицательным числом.',
};
Localization.StudyGroupModifyName = {
  'ErrorMandatoryClassNumber': 'Номер класса обязателен.',
  'ErrorNegativeNumber': 'Номер класса не может быть отрицательным числом.',
};
Localization.TaskAdd = {
  'NotifySuccessDraftSaved': 'Работа сохранена.',
  'TextReadThroughTheChapter': 'Прочитайте параграф «{0}».',
  'NotifyErrorTooManyExercisesSelected': 'В одной работе может быть не более {0} заданий.',
  'NotifySuccessTaskAssigned': 'Работа назначена!',
  'NotifyErrorMandatoryExercise': 'Должно быть выбрано не менее одного задания!',
  'NotifyErrorMandatoryRegister': 'Журнал должен быть выбран!',
  'NotifyErrorMandatoryTitle': 'Заголовок обязателен!',
  'NotifyErrorMandatoryAddress': 'Получатель работы должен быть указан!',
  'NotifyErrorMandatoryDeadline': 'Срок выполнения должен быть указан!',
  'ConfimationDialogDeleteDraftTask': 'Вы уверены, что хотите удалить черновик работы?',
  'NotifySuccessTaskDeleted': 'Черновик удален!',
};
Localization.TaskAddExercises = {
  'SelectListPlaceholderText': 'Выбрать',
  'NotifyExercisesAddedSuccessMessage': 'Задания добавлены к работе',
};
Localization.TaskEvaluationIndex = {
  'StatusRejected': 'Отправлено обратно',
  'SaveAndDiscloseButtonScore': 'Опубликовать процент выполнения работы',
  'SaveAndDiscloseButtonGrade': 'Опубликовать оценку',
  'TaskRejectedSuccessMessage': 'Работа ученику отправлена!',
  'SaveAndDiscloseButtonOtherGrade': 'Опубликовать другую оценку',
  'SaveAndDiscloseButtonFormativeGrade': 'Опубликовать формирующее оценивание',
  'StatusNotGraded': 'Не оценено',
  'StudentMessageHeading': 'Сообщение ученика:',
  'ButtonTextShowMore': 'Больше данных',
  'ButtonTextShowLess': 'Меньше данных',
  'ScoreNotDisclosableText': 'Процент выполнения вычислить невозможно.',
  'StatusNotDisclosed': 'Не опубликовано',
  'DiscloseScoreInfo': 'Опубликовать процент выполнения работы учеником.',
  'StatusDisclosed': 'Опубликовано',
  'SomeAnswersUncheckedToolTipFormat': '{0} ответ не проверен',
  'ValidationMaterialBlockHeadingTeacherRecentAddedMaterial': 'Последний добавленный учителем материал',
};
Localization.TaskReviewIndex = {
  'ButtonTextDiscloseSelected': 'Опубликовать выбранное ({0})',
  'ReclaimedAssignedTaskHeading': 'Ученик запросил работу назад',
  'ConfimationDialogDeleteStudentTask': 'Вы уверены, что желаете удалить работу ученика? Если ученик уже выполнил задание и сохранил ответы, они будут удалены.',
  'LinkCopiedSuccessText': 'Ссылка скопирована',
  'OnlySubmittedTasksCanBeRejectedErrorMessage': 'Отправить можно только представленные работы!',
  'ConfimationDialogDeleteTask': 'Вы уверены, что желаете удалить работу? Если ученики уже выполнили задание и сохранили ответы, они будут удалены.',
  'TaskWillBeDeletedFromeKoolTip': 'Работы eKool не удаляются.',
  'DiscloseWarningMessageForMultipleReclaimedTasks': '{0} учеников запросили работу назад.',
  'DiscloseWarningConfirmationForOneReclaimedTask': 'Вы уверены, что хотите опубликовать работу?',
  'DisclosedTasksCanNotBeDisclosedErrorMessage': 'Опубликованные работы не нужно опубликовывать повторно!',
  'TasksRejectedSuccessMessage': 'Работы ученикам проверены и отправлены!',
  'TaskWillBeDeletedFromstuudiumTip': 'Работа будет также удалена из Stuudium.',
  'DiscloseWarningConfirmationForMultipleReclaimedTasks': 'Вы уверены, что хотите опубликовать работу?',
  'ButtonTextRejectSelected': 'Отправить повторно ({0})',
  'DiscloseWarningMessageForOneReclaimedTask': 'Ученик запросил работу назад.',
};
Localization.TaskSolvingIndex = {
  'ExerciseAnswerNotSaved': 'Ответ на это задание не сохранен.',
  'AnswerIsTooLong': 'Слишком длинный ответ!',
  'ConfirmationDialogSubmitTask': 'Вы уверены, что желаете представить работу?',
  'ChapterNotMarkedRead': 'Не помечено, что параграф проработан.',
};
Localization.TaskStatistics = {
  'Tooltip': '{0}<br/>{1}/{2} или {3}% работ',
};
Localization.TeacherDesktopTasks = {
  'Deadline': 'Срок',
  'ConfirmationDialogRemoveFromDesktop': 'Вы уверены, что желаете удалить работу с главной страницы? Работа по-прежнему находится в боковом меню журнала.',
  'Submitted': 'Представлено',
};
Localization.UserDetails = {
  'RemoveLicenseConfirmation': 'Вы уверены, что хотите удалить лицензию пользователя?',
  'InvitationSentMessage': 'Приглашение отправлено!',
};
Localization.UserMaterial = {
  'NoTextEnteredErrorMessage': 'Пожалуйста, введите текст.',
  'AddTextHeading': 'Добавить текст',
  'DeleteTextConfirmationMessage': 'Желаете удалить текст?',
  'FileUploadFailedErrorMessage': 'Не удалось сохранить файл.',
  'DeleteImageConfirmationMessage': 'Желаете удалить иллюстрацию?',
  'AddMaterialHeading': 'Добавить материал',
  'DeleteFileConfirmationMessage': 'Желаете удалить файл?',
  'SelectFilePrompt': 'Пожалуйста, выберите файл.',
  'AddFileHeading': 'Добавить файл',
  'FilesTooLargeErrorMessage': '{0} файлы слишком большие, их невозможно добавить.',
  'ImgDimensionsTooLargeErrorMessage': 'Размеры {0} изображения слишком велики. Максимально допустимая длина стороны составляет {1} пикселей.',
  'UnsupportedFileTypesErrorMessage': 'Файл с расширением {0} нельзя добавить. Тип файла не включен в список разрешенных.',
};
Localization.UsersBatchImport = {
  'HeadingAddedUsers': 'Добавлено {0}/{1} пользователей',
};
Localization.UsersRemove = {
  'RemoveSelectedRolesSingleUser': 'Удалить у пользователей выбранные ими роли',
  'DisabledButtonTooltip': 'Сначала выберите пользователей и роли, которые следует удалить.',
  'RemoveRoleDefaultText': 'Удалить у пользователя роль',
  'RemoveAllRolesMultipleUsers': 'Удалить у {0} пользователя все роли',
  'RemoveSpecificRoleMultipleUsers': 'Удалить у {0} пользователя роль «{1}»',
  'RemoveAllRolesSingleUser': 'Удалить у пользователя все роли',
  'RemoveSelectedRolesMultipleUsers': 'Удалить у {0} пользователей выбранные ими роли',
  'FromMultipleUsers': 'У {0} пользователей',
  'FromSingleUser': 'У 1 пользователя',
  'RemoveSpecificRoleSingleUser': 'Удалить у пользователя роль «{0}»',
};
