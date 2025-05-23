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
  'NotifyErrorInvitationCanBeResentOnlyToUsersWithEmails': 'メールアドレスのない招待状はユーザーに送信されません。',
  'UserHasEKoolAndStuudiumBinding': 'ユーザーはeKoolおよびStuudium接続を使用しています',
  'NotifyErrorChooseMembersToRemove': '削除したいユーザーを選択してください！',
  'NotifyErrorInvitationWasResentOnlyToUsersWithEmails': 'メールアドレスのある招待状のみがユーザーに送信されます。',
  'NotifyWarningNoUsersAdded': 'ユーザーは追加されませんでした！',
  'UserHasStuudiumBinding': 'ユーザーはStuudiumに接続されています',
  'ValidationErrorWrongEmail': 'メールアドレスが正しくありません。入力はラテン文字のみが許可されます。',
  'NotifyErrorChooseMembersToResendInvitation': 'もう一度招待したいユーザーを選択してください！',
  'UserHasEKoolBinding': 'ユーザーはeKoolに接続されています',
  'ErrorChooseStudents': '生徒を選択してください！',
  'ValidationErrorFormMustHaveFilledRows': '1行ですべてのフィールドに入力する必要があります！',
};
Localization.AdminCustomerUsers = {
  'ModalTitle': 'ロール「{0}」はユーザーから削除されます。',
};
Localization.AdminUsersSearch = {
  'EnterSchoolNameMessage': '学校名を入力してください',
  'LicensePackageAll': 'すべてのパッケージ',
};
Localization.Annotation = {
  'ErrorMessageAnnotationAlreadyDeleted': '注釈が既に削除されているため、注釈の編集に失敗しました。',
};
Localization.AutoComplete = {
  'SearchingMessage': '検索しています…',
  'ErrorLoadingResultsMessage': '結果を読み込めませんでした',
  'NoResultsMessage': '見つかりませんでした',
};
Localization.ChapterExerciseCreate = {
  'NotifyErrorMandatoryChapter': 'チャプターを選択！',
  'NotifyErrorMandatoryTitle': 'タイトルを入力してください！',
  'NotifyErrorMandatoryKit': '学習キットを選択！',
};
Localization.ChapterExercisesIndex = {
  'TooltipTextUserNotInActiveRegisters': 'タスクを作成するには、少なくとも1つのコースが必要です。',
  'ConfimationDialogAreYouSure': '本当にこれを実行してもよろしいですか？',
};
Localization.ChapterIndex = {
  'LinkCopiedSuccessMessage': 'リンクがコピーされました。',
};
Localization.CouponBatchDetails = {
  'DeleteCouponModalMessage': 'クーポンが削除されます。ユーザーが既にクーポンを持っている場合、ユーザーはそれを使用できなくなります。',
};
Localization.CouponCreate = {
  'EnterCustomerNameMessage': 'カスタマー名を入力してください',
  'PricePerMonthFormat': '{0}か月',
  'CustomerTypeSchool': '学校',
  'WarningCouponCountBigFormat': '本当に{0}クーポンを作成してもよろしいですか？',
  'QuantityMustBeSetError': '数を設定する必要があります。',
  'NoResultsMessage': '見つかりませんでした',
  'CouponCountMustBeSetError': 'クーポン数を設定する必要があります。',
  'PackageMustBeSelectedError': 'パッケージを設定する必要があります。',
  'CouponValidUntilMustBeSetError': 'クーポンの有効期限日を設定する必要があります。',
  'CustomerTypeMustBeSelectedError': 'カスタマータイプを設定する必要があります。',
  'SelectCustomerTypeError': 'カスタマータイプを選択してください。',
  'CustomerTypePrivateUser': '個人カスタマー',
  'LengthOfValidityMustBeSetError': 'クーポンの有効期間を設定する必要があります。',
};
Localization.CreateCustomer = {
  'NoCustomerTypeSelectedError': 'カスタマータイプを選択する必要があります。',
};
Localization.CreateSchoolAdminAccount = {
  'PasswordRepeatDifferentError': 'パスワードの繰り返しとパスワードが一致しません。',
  'RequiredFieldLeftEmptyErrorWithArgs': '{0}が必要です。',
  'Field': 'フィールド',
  'PasswordTooShortErrorWithArgs': 'パスワードは{0}文字以上である必要があります。',
  'UserNameInvalidEmailWithArgs': '{0}は有効なメールアドレスである必要があります。',
};
Localization.Currency = {
  'CurrencyFormatDefault': '{0} {1}',
};
Localization.EditTextExercise = {
  'NeededSpaceRemoval': '1つの単語として書く必要があります',
  'PerformedRemoval': '{0}は{1}を削除されました',
  'NeededSpaceAddition': '2つの単語として書く必要があります',
  'PerformedSpaceRemoval': '{0}が1つの単語として書かれています',
  'NeededRemoval': '{0}は削除されませんでした',
  'ExpectedClause': 'は{0}でなければなりません',
  'NeededReplacement': '修正されていませんでした<i>{0} → {1}</i>',
  'EvaluationCorrectly': '正解',
  'PerformedSpaceAddition': '{0}が2つの単語として書かれています',
  'EvaluationIncorrectly': '不正解',
  'NeededAddition': '{0}は追加されませんでした',
  'PerformedAddition': '{0}は{1}を追加されました',
  'PerformedReplacement': '{0}は<i>{1} → {2}</i>を置き換えました',
};
Localization.ErrorReportModal = {
  'ErrorReportContactInfoExcessiveLength': 'Kontaktandmeid võid sisestada kuni {0} sümbolit, oled sisestanud {1} sümbolit.',
  'AddErrorDescription': 'エラーの詳細を記入して下さい！',
  'ErrorReportDescriptionExcessiveLength': 'Vea kirjeldus võib olla kuni {0} sümbolit pikk, oled sisestanud {1} sümbolit.',
  'ErrorReportCreated': '報告は保存済み',
};
Localization.ExerciseMenu = {
  'ExerciseToolTipText': '課題演習',
  'ChapterExerciseToolTipText': 'チャプター演習',
};
Localization.Exercises = {
  'DragFromGroupTitle': 'ここから上の列に回答をドラッグします',
  'ChangeButtonText': '編集',
  'DragHerePlaceholder': 'ここにドラッグしてください',
  'SaveButtonText': '保存',
  'TeachersCommentHeading': '{0} のコメント',
  'CheckAnswerButtonText': '解答をチェック',
  'NoAnswerSelectedByStudent': '生徒は解答を選択しませんでした',
  'ButtonTextShowMyAnswers': '自分の解答を表示',
  'MethodologicalTextSectionHeading': '注意！このコンテンツアイテムは生徒には見えません。',
  'ButtonTextShowStudentsAnswers': '生徒の解答を表示',
  'FixMistakesButtonText': '回答を編集する',
  'ExerciseOldCommentWarning': 'これは{0}の古いコメントです。本当にもう一度送信しますか？',
  'HideExampleAnswersText': '回答例を非表示',
  'TryAgainButtonText': 'もう一度やり直してください',
  'NoAnswerSelectedByYou': 'あなたは解答を選択しませんでした',
};
Localization.FoxGraph = {
  'ButtonTextLoad': '読み込む',
};
Localization.Global = {
  'SavedNotificationMessage': '保存しました',
  'LoadingContentMessage': 'コンテンツを読み込んでいます…',
  'AjaxErrorSessionExpired': 'ユーザーセッションの有効期限が切れました！',
  'AjaxErrorNoAccess': 'このユーザーはこのリソースにアクセスできません！',
  'AjaxErrorSessionChanged': 'ユーザーセッションが変更されました。ページを再度読み込んでください！',
  'AjaxErrorNoConnection': 'サーバーへの接続がありません！',
  'DatepickerLanguageCode': 'ja',
  'ConfirmationModalQuestion': '本当にこれを実行してもよろしいですか？',
  'AjaxErrorConcurrency': 'データが更新されました。ページを再読み込みしてください！',
  'AjaxErrorOther': 'エラーが発生しました :(',
};
Localization.InvoiceRecipient = {
  'ConfirmClearInvoiceRecipientText': '請求書受取人データを削除しますか？',
};
Localization.JoinRegister = {
  'SuccessfullyJoinedRegister': 'Liitusid päevikuga!',
};
Localization.JoinSchool = {
  'SuccessfullyJoinedSchool': '学校に登録しました！',
};
Localization.KitAddKitToRegisters = {
  'ChooseRegistersPlaceholder': '選択',
  'NotifySuccessMessageAddedToSingleRegister': 'キットをコースに追加',
  'NotifySuccessMessageAddedToMultipleRegisters': 'キットがコースに追加されました',
};
Localization.KitCreateRegisterFromKit = {
  'NotifyErrorMessageDataNotSaved': 'データを保存できませんでした！',
  'ErrorMessageTeacherNotFound': '教師が見つかりません！リストから教師を選択してください！',
  'NotifySuccessMessageDataSaved': 'データが保存されました！',
};
Localization.KitDetails = {
  'InUseSingleRegister': '1コースで使用',
  'InUseRegisters': '{0}コースで使用',
  'RemoveSuccessMessage': 'この学習キットが学習教材から削除されます。',
};
Localization.LicensingIndex = {
  'LicenseButtonLicenseNUsersText': '{0}人のユーザーにライセンスを与える',
  'LicenseButtonLicenseOneUserText': '1人のユーザーにライセンスを与える',
  'LicenseButtonText': 'ライセンス',
  'LicenseSelectionPlaceHolder': 'ライセンスを選択（任意)',
};
Localization.LicensingRemoveLicenses = {
  'ButtonRemoveLicenseNUsersText': '{0}人のユーザーからライセンスを削除',
  'LicenseMissing': 'ライセンスがありません',
  'RemoveLicenseButtonText': '削除',
  'ButtonTooltipNoLicenseSelected': '選択したユーザーが既に持っているライセンスを選択してください',
  'ChosenLicenseMissing': '選択したライセンスがありません',
  'ButtonTooltipNoUsersSelected': 'ライセンスを削除するには、まずライセンスを削除するユーザーを選択します',
  'LicenseSelectionPlaceHolder': 'ライセンスを選択（任意)',
};
Localization.ManageIndex = {
  'ConfirmationDialog': '本当に続行してもよろしいですか？',
};
Localization.ManageLinkLoginConfirmation = {
  'ConfirmationDialog': '本当に続行してもよろしいですか？',
};
Localization.MediaGallery = {
  'ExitFullscreen': '全画面を終了する',
  'SendToProjector': 'プロジェクターに送信する',
  'ShowFullscreen': '全画面を表示する',
};
Localization.OrderDetails = {
  'ConfirmationModalMessage': '本当にこれを実行してもよろしいですか？',
  'ReturnToDraftModalBoxTip': 'The order is opened, the school can change the order and confirm it again.',
  'OrderWillBeConfirmedBoxTip': 'The order is being confirmed.',
  'ActionFailedMessage': 'Operation failed.',
  'DeleteOrderCompletelyBoxTip': 'The order will be deleted entirely.',
};
Localization.OrderOrder = {
  'PackageBoxTipText': 'パッケージ「{0}」に希望するキットが含まれていることを確認してください。キットは<a href="{1}" class="system-link" target="_blank">こちら</a>で表示できます。',
  'ErrorMandatoryPackage': 'パッケージを選択する必要があります。',
  'ConfirmationNeededBoxTipMessageSingle': 'Tellimus läheb peale kinnitamist ülevaatusele, kuna valisid paketi {0}. Opiq kinnitab tellimuse pärast soodustuse kehtivuses veendumist.',
  'ErrorMustAgreeToTermsAndConditions': '利用規約を読み、同意する必要があります。',
  'ErrorPaymentMethodNotSelected': '支払方法を選択する必要があります。',
  'ErrorMandatoryCountry': '国を選択してください。',
  'ErrorChoosePackage': '最初にパッケージを選択してください！',
  'SingleMonth': '月',
  'ErrorMandatoryRegisterCode': '登録コードを入力してください。',
  'DeleteOrderConfimationDialog': '本当にこれを実行してもよろしいですか？',
  'ErrorPackageNotAvailable': 'そのパッケージはもう利用できません。',
  'ErrorValidFromMustBeGreaterThanValidUntil': '開始日は終了日より前でなければなりません。',
  'PackageNameInQuotes': '「{0}」',
  'ErrorMandatoryTown': '市町村名を入力してください。',
  'ConfimationDialogDeleteLicenseRow': '本当にこれを実行してもよろしいですか？',
  'ConfirmationNeededBoxTipMessageMultiple': 'Tellimus läheb peale kinnitamist ülevaatusele, kuna valisid paketid {0}. Opiq kinnitab tellimuse pärast soodustuse kehtivuses veendumist.',
  'SchoolConfirmationModalTextWithConfirmationNeededPackage': 'Kinnitad tellimuse summas {0}, mis läheb Opiqusse ülevaatusele. Opiq kinnitab tellimuse pärast soodustuse kehtivuses veendumist. Tellimuse ülevaatus võib võtta aega. Tellimuse kinnituse saavad oma e-posti aadressile kõik selle kooli kooliadministraatorid.',
  'ErrorMandatoryInvoiceRecipientName': '請求書受取人名を入力してください。',
  'PrivateUserConfirmationModalText': '注文を確定する前に、選択したパッケージに希望するキットが含まれていることと、有効期間が正しいことを確認してください。',
  'ProductSummarySingleMonth': 'Opiqライセンス「{0}」は1か月間（{1} - {2}）有効で、費用は{3}です。',
  'MultipleMonths': '月',
  'Day': '日',
  'ErrorPaymentScheduleNotCalculated': '支払スケジュールを計算する必要があります。',
  'ErrorMandatoryLicenseValidUntil': '終了日を選択する必要があります。',
  'SingleYear': '年',
  'ErrorMandatoryLicenseValidFrom': '開始日を選択する必要があります。',
  'ProductSummaryMultipleMonths': 'Opiqライセンス「{0}」は{1}か月間（{2} - {3}）有効で、費用は{4}です。',
  'SchoolConfirmationModalText': '注文を確認しています。選択した支払方法に従って{0}を支払う必要があります。注文の確認は、学校のすべての管理者にメールで送信されます。',
  'OverlappingPendingLicensesWarning': 'パッケージ「{0}」の期間{1} – {2}のライセンスが、パッケージ「{3}」の期間{4} – {5}のライセンスと一致しています！',
  'ErrorMandatoryCounty': '都道府県を入力してください。',
  'MultipleYears': '年',
  'ErrorMandatoryStreetAndHouse': '番地と建物名を入力してください。',
  'ErrorInvalidEmail': 'メールアドレスが正しくありません。入力はラテン文字のみが許可されます。',
  'ErrorAtLeastOneLicenseMandatory': '注文は少なくとも1行を含む必要があります！',
  'DeleteOrderBoxTip': 'Tellimus kustutatakse.',
  'ErrorMandatoryZipCode': '郵便番号。',
  'ErrorQuantityBiggerThanOne': '数量は0より大きく設定する必要があります。',
  'ErrorMandatoryEmailAddress': 'メールアドレスを入力してください。',
};
Localization.PageHeaderComponent = {
  'GenericLicensesTitle': 'ライセンス',
  'GenericFailedImportsTitle': '失敗したインポート',
  'GenericRegistersTitle': 'コース',
  'GenericStudyProgressTitle': 'ブックマーク',
  'GenericSuccessfulImportsTitle': '成功したインポート',
  'HeaderTitleExerciseNotSavedMessage': '未保存',
  'GenericInProgressImportsTitle': 'インポート中',
  'HeaderTitleExerciseSavedMessage': 'タスクを保存しました',
  'GenericOrdersTitle': '注文',
  'GenericTasksTitle': 'タスク',
};
Localization.PrivateUserKitIndex = {
  'TOCSetCurrentChapter': 'ブックマークチャプター',
  'TOCCurrentChapterTooltip': 'このチャプターはブックマークされています',
  'RemoveSuccessMessage': 'このキットが学習教材から削除されました。',
};
Localization.RegisterAdminAddRegister = {
  'RegisterErrorMandatoryKit': '学習キットを選択してください。',
  'SubmitButtonTextSaveAndSendInvitation': '保存して招待状を送信',
  'RegisterErrorMandatoryRegisterName': 'コース名を入力してください。',
};
Localization.RegisterAdminModifyName = {
  'ValidationErrorNotSuccessfulNameModification': 'コース名を編集できませんでした。',
};
Localization.RegisterAdminUpdateKit = {
  'DropdownPlaceholderText': '選択',
};
Localization.RegisterKitSettings = {
  'StudentsPackageRemovedSuccessfully': 'Litsentsi lisamine on peatatud!',
  'ConfirmationModalBody': '本当に続行してもよろしいですか？',
  'ConfirmationModalBoxTip': 'Koodiga liitumine peatatakse. Liitumise uuesti aktiveerimisel genereeritakse uus kood, senist koodi enam kasutada ei saa.',
  'NotifyCodeWasCopied': 'Kood kopeeriti',
};
Localization.RegisterKitTaskResults = {
  'SelectListTextAll': 'すべて',
  'TaskTypesSelectionLabelAllTypes': '全てのタイプ',
  'NotifyErrorPeriodHasBeenLimitedToOneYear': '1年未満でなければなりません。',
  'AppliedTaskTypesCountMessage': '{0}選択',
};
Localization.RegisterLicensing = {
  'ConfirmationModelConfirmText': 'Kas oled kindel, et soovid õpilastele litsentsid lisada?',
  'MissingPackagesToShareError': 'Koolil puuduvad sobivad litsentsid.',
};
Localization.RegisterListSchoolAdmin = {
  'SearchButtonSearchingTitle': '検索しています…',
  'UserAutoCompletePrompt': 'ユーザーの姓を入力してください',
  'SearchButtonDefaultTitle': '検索',
};
Localization.SchoolSettingsConfirmation = {
  'GenericBindingConfirmationDialog': '本当によろしいですか？',
  'ConfirmationDialogAstraSchoolSameAsStuudiumSchool': '本当にOpiqの学校{0}とStuudiumの学校{1}が同じになっていますか？',
};
Localization.SchoolStudySeasonActivateNextComing = {
  'ConfimationDialogActivateNextComingStudySeason': '本当にこの学年度を終了して次の年度を開始してもよろしいですか？これにより、現在のすべての学習グループとコースがアーカイブに転送されます。続行しますか？',
};
Localization.Search = {
  'ExercisesSearchTooltipTextUserLacksRegisters': 'タスクを作成するには、少なくとも1つのコースが必要です。',
};
Localization.SolvingExercise = {
  'HeaderTitleExerciseNotSavedMessage': '未保存',
  'HeaderTitleExerciseSavedMessage': 'タスクを保存しました',
};
Localization.StudentResultsIndex = {
  'ShowClassAverageButton': 'クラス平均を表示',
  'ScoreResultsTooltip': 'このまとめは、結果として得点を持つタスクのみを対象としています。',
  'HideClassAverageButton': 'クラス平均を非表示',
  'GradeResultsTooltip': 'このまとめは成績のつけられたタスクのみを対象としています。',
};
Localization.StudentResultsSingleSubject = {
  'NotifyErrorPeriodEndBeforePeriodStart': '期間終了日は、期間開始日の後でなければなりません。',
  'NotifyErrorPeriodLengthLimitation': '1年未満でなければなりません。',
};
Localization.StudyGroupAdd = {
  'ErrorMandatoryClassNumber': 'クラス番号を入力してください。',
  'ErrorNegativeNumber': '正の整数を入力してください。',
};
Localization.StudyGroupModifyName = {
  'ErrorMandatoryClassNumber': 'クラス番号を入力してください。',
  'ErrorNegativeNumber': '正の整数を入力してください。',
};
Localization.TaskAdd = {
  'NotifySuccessDraftSaved': 'ドラフトを保存しました。',
  'TextReadThroughTheChapter': '「{0}」のチャプターを読んでください。',
  'NotifyErrorTooManyExercisesSelected': '1つのタスクに{0}個を超える演習を含めることはできません。',
  'NotifySuccessTaskAssigned': 'タスクが割り当てられました！',
  'NotifyErrorMandatoryExercise': '少なくとも1つの演習を選択する必要があります！',
  'NotifyErrorMandatoryRegister': '課程を選択してください！',
  'NotifyErrorMandatoryTitle': 'タイトルを入力してください！',
  'NotifyErrorMandatoryAddress': '受領者を選択してください！',
  'NotifyErrorMandatoryDeadline': '締切を設定してください！',
  'ConfimationDialogDeleteDraftTask': 'ドラフトを削除してもよろしいですか？',
  'NotifySuccessTaskDeleted': 'ドラフトを削除しました！',
};
Localization.TaskAddExercises = {
  'SelectListPlaceholderText': '選択',
  'NotifyExercisesAddedSuccessMessage': 'ドラフトに演習が追加されました',
};
Localization.TaskEvaluationIndex = {
  'StatusRejected': '送信済です',
  'SaveAndDiscloseButtonScore': '得点の保存と公開',
  'SaveAndDiscloseButtonGrade': '成績の保存と公開',
  'TaskRejectedSuccessMessage': 'タスクは生徒に送り返されます！',
  'SaveAndDiscloseButtonOtherGrade': 'その他の保存と公開',
  'SaveAndDiscloseButtonFormativeGrade': '形成的評価の保存と公開',
  'StatusNotGraded': '未評価',
  'StudentMessageHeading': '生徒のメッセージ：',
  'ButtonTextShowMore': 'もっと表示',
  'ButtonTextShowLess': '少なく表示',
  'ScoreNotDisclosableText': '得点を計算できません。',
  'StatusNotDisclosed': '未公開',
  'DiscloseScoreInfo': '得点を結果として公開します。',
  'StatusDisclosed': '公開済',
  'SomeAnswersUncheckedToolTipFormat': '{0}個の解答がチェックされていません',
  'ValidationMaterialBlockHeadingTeacherRecentAddedMaterial': '教師が最近追加した教材',
};
Localization.TaskReviewIndex = {
  'ButtonTextDiscloseSelected': '選択したものを公開（{0}）',
  'ReclaimedAssignedTaskHeading': '生徒が課題を返されました',
  'ConfimationDialogDeleteStudentTask': '本当にこの生徒のタスクを削除してもよろしいですか？生徒が既にタスクを解いて解答を保存している場合、解答は削除されます。',
  'LinkCopiedSuccessText': 'リンクがコピーされました',
  'OnlySubmittedTasksCanBeRejectedErrorMessage': '提出されたタスクのみ返送できます！',
  'ConfimationDialogDeleteTask': '本当にこのタスクを削除してもよろしいですか？生徒が既にタスクを解いて解答を保存している場合、解答は削除されます。',
  'TaskWillBeDeletedFromeKoolTip': 'タスクはeKoolで削除されません。',
  'DiscloseWarningMessageForMultipleReclaimedTasks': '{0}人の生徒が課題を返されました。',
  'DiscloseWarningConfirmationForOneReclaimedTask': '課題を開示してもよろしいですか？',
  'DisclosedTasksCanNotBeDisclosedErrorMessage': 'タスクが既に公開されている場合は、それを公開する必要はありません！',
  'TasksRejectedSuccessMessage': 'タスクは生徒に送り返されました！',
  'TaskWillBeDeletedFromstuudiumTip': 'タスクはStuudiumでも削除されます。',
  'DiscloseWarningConfirmationForMultipleReclaimedTasks': '課題を開示してもよろしいですか？',
  'ButtonTextRejectSelected': '送り返す（{0}）',
  'DiscloseWarningMessageForOneReclaimedTask': '生徒が課題を返されました。',
};
Localization.TaskSolvingIndex = {
  'ExerciseAnswerNotSaved': 'この演習の答えは保存されません。',
  'AnswerIsTooLong': '回答が長すぎます！',
  'ConfirmationDialogSubmitTask': '本当にこのタスクを提出してもよろしいですか？',
  'ChapterNotMarkedRead': 'チャプターは既読としてマークされていません。',
};
Localization.TaskStatistics = {
  'Tooltip': '{0}<br/>{1}/{2} 例：課題の{3}%',
};
Localization.TeacherDesktopTasks = {
  'Deadline': '締切',
  'ConfirmationDialogRemoveFromDesktop': '本当にこのタスクをホームページから削除してもよろしいですか？このコースのタスクリストからそれを引き続き見つけることができます。',
  'Submitted': '提出済',
};
Localization.UserDetails = {
  'RemoveLicenseConfirmation': 'ユーザーからライセンスを削除しますか？',
  'InvitationSentMessage': '送信済が送信されました！',
};
Localization.UserMaterial = {
  'NoTextEnteredErrorMessage': 'テキストを入力してください。',
  'AddTextHeading': 'テキストを追加',
  'DeleteTextConfirmationMessage': 'テキストを削除しますか？',
  'FileUploadFailedErrorMessage': 'ファイルのアップロード中にエラーが発生しました。',
  'DeleteImageConfirmationMessage': '画像を削除しますか？',
  'AddMaterialHeading': '教材を追加',
  'DeleteFileConfirmationMessage': 'ファイルを削除しますか？',
  'SelectFilePrompt': 'ファイルを選択してください。',
  'AddFileHeading': 'ファイルを追加',
  'FilesTooLargeErrorMessage': 'ファイル{0}は大きすぎるため、追加できません。',
  'ImgDimensionsTooLargeErrorMessage': '画像 {0} が大きすぎます。サポートされているのは、長辺が最大{1}ピクセルの画像です。',
  'UnsupportedFileTypesErrorMessage': 'ファイル{0}はサポートされていないタイプであるため、追加できません。',
};
Localization.UsersBatchImport = {
  'HeadingAddedUsers': '{0}/{1}人のユーザーを追加',
};
Localization.UsersRemove = {
  'RemoveSelectedRolesSingleUser': 'ユーザーから選択したロールを削除',
  'DisabledButtonTooltip': 'ロールを削除するには、最初にユーザーを選択してから削除するロールを選択します。',
  'RemoveRoleDefaultText': 'ユーザーからロールを削除',
  'RemoveAllRolesMultipleUsers': '{0}人のユーザーからすべてのロールを削除',
  'RemoveSpecificRoleMultipleUsers': '{0}人のユーザーからロール「{1}」を削除',
  'RemoveAllRolesSingleUser': 'ユーザーからすべてのロールを削除',
  'RemoveSelectedRolesMultipleUsers': '{0}人のユーザーから選択したロールを削除',
  'FromMultipleUsers': '{0}人のユーザーから',
  'FromSingleUser': '1人のユーザーから',
  'RemoveSpecificRoleSingleUser': 'ユーザーからすべてのロール「{0}」を削除',
};
