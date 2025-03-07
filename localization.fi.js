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
  'NotifyErrorInvitationCanBeResentOnlyToUsersWithEmails': 'Käyttäjille, joilla ei ole sähköpostiosoitetta, ei voi kutsua lähettää.',
  'UserHasEKoolAndStuudiumBinding': 'Käyttäjällä on eKoolin ja Stuudiumin liittymä',
  'NotifyErrorChooseMembersToRemove': 'Merkitse käyttäjät, jotka poistetaan listalta!',
  'NotifyErrorInvitationWasResentOnlyToUsersWithEmails': 'Kutsu lähetettiin vain käyttäjille, joilla on sähköpostiosoite.',
  'NotifyWarningNoUsersAdded': 'Käyttäjiä ei ole lisätty!',
  'UserHasStuudiumBinding': 'Käyttäjällä on Stuudiumin liittymä',
  'ValidationErrorWrongEmail': 'Tarkista sähköpostiosoite. Vain latinalaisten aakkosten merkit sallitaan.',
  'NotifyErrorChooseMembersToResendInvitation': 'Merkitse käyttäjät, joille kutsu lähetetään uudelleen!',
  'UserHasEKoolBinding': 'Käyttäjällä on eKoolin liittymä',
  'ErrorChooseStudents': 'Valitse oppilaat!',
  'ValidationErrorFormMustHaveFilledRows': 'Kaikkien kenttien tulee olla täytetty yhdellä rivillä!',
};
Localization.AdminCustomerUsers = {
  'ModalTitle': 'Kasutajalt eemaldatakse roll "{0}".',
};
Localization.AdminUsersSearch = {
  'EnterSchoolNameMessage': 'Syötä koulun nimi',
  'LicensePackageAll': 'Kaikki paketit',
};
Localization.Annotation = {
  'ErrorMessageAnnotationAlreadyDeleted': 'Huomautusten muuttaminen epäonnistui, sillä se oli jo poistettu.',
};
Localization.AutoComplete = {
  'SearchingMessage': 'Etsin…',
  'ErrorLoadingResultsMessage': 'Tulosten lataus epäonnistui',
  'NoResultsMessage': 'Ei löydetty tuloksia',
};
Localization.ChapterExerciseCreate = {
  'NotifyErrorMandatoryChapter': 'Luku tulee olla valittu!',
  'NotifyErrorMandatoryTitle': 'Otsikko tulee olla määritelty!',
  'NotifyErrorMandatoryKit': 'Oppimateriaali tulee olla valittu!',
};
Localization.ChapterExercisesIndex = {
  'TooltipTextUserNotInActiveRegisters': 'Tehtäväkokonaisuuden laatimiseen pitää olla vähintään yksi kurssi.',
  'ConfimationDialogAreYouSure': 'Oletko varma, että haluat tehdä tämän?',
};
Localization.ChapterIndex = {
  'LinkCopiedSuccessMessage': 'Linkki on kopioitu.',
};
Localization.CouponBatchDetails = {
  'DeleteCouponModalMessage': 'Lahjakortti poistetaan. Jos lahjakortti on jo asiakkaan hallussa, niin poistamisen jälkeen sitä ei voi enää käyttää.',
};
Localization.CouponCreate = {
  'EnterCustomerNameMessage': 'Syötä asiakkaan nimi',
  'PricePerMonthFormat': '{0} kuukausi',
  'CustomerTypeSchool': 'Koulu',
  'WarningCouponCountBigFormat': 'Oletko varma, että haluat luoda {0} lahjakortin?',
  'QuantityMustBeSetError': 'Määrä on pakollinen tieto.',
  'NoResultsMessage': 'Tuloksia ei löytynyt',
  'CouponCountMustBeSetError': 'Lahjakorttien lukumäärä on pakollinen tieto.',
  'PackageMustBeSelectedError': 'Paketti on pakollinen tieto.',
  'CouponValidUntilMustBeSetError': 'Lahjakortin voimassaolon päättyminen on pakollinen tieto.',
  'CustomerTypeMustBeSelectedError': 'Asiakkaan tyyppi on pakollinen tieto.',
  'SelectCustomerTypeError': 'Valitse ensin asiakkaan tyyppi.',
  'CustomerTypePrivateUser': 'Yksityiskäyttäjä',
  'LengthOfValidityMustBeSetError': 'Voimassaolon kesto on pakollinen tieto.',
};
Localization.CreateCustomer = {
  'NoCustomerTypeSelectedError': 'Asiakkaan tyyppi on pakollinen tieto.',
};
Localization.CreateSchoolAdminAccount = {
  'PasswordRepeatDifferentError': 'Salasana ja salasanan toisto eivät ole samat.',
  'RequiredFieldLeftEmptyErrorWithArgs': '{0} tulee olla täytetty.',
  'Field': 'Kenttä',
  'PasswordTooShortErrorWithArgs': 'Salasanan tulee olla vähintään {0} merkkiä pitkä.',
  'UserNameInvalidEmailWithArgs': '{0} tulee olla oikeassa s-postiformaatissa.',
};
Localization.Currency = {
  'CurrencyFormatDefault': '{0} {1}',
};
Localization.EditTextExercise = {
  'NeededSpaceRemoval': 'Jätetty kirjoittamatta yhteen',
  'PerformedRemoval': '{0} poistettu {1}',
  'NeededSpaceAddition': 'Jätetty kirjoittamatta erikseen',
  'PerformedSpaceRemoval': '{0} kirjoitettu yhteen',
  'NeededRemoval': 'Jätetty poistamatta {0}',
  'ExpectedClause': '; tulisi olla {0}',
  'NeededReplacement': 'Jätetty korjaamatta <i>{0} → {1}</i>',
  'EvaluationCorrectly': 'Oikein',
  'PerformedSpaceAddition': '{0} kirjoitettu erikseen',
  'EvaluationIncorrectly': 'Väärin',
  'NeededAddition': 'Jätetty lisäämättä {0}',
  'PerformedAddition': '{0} lisätty {1}',
  'PerformedReplacement': '{0} korjattu <i>{1} → {2}</i>',
};
Localization.ErrorReportModal = {
  'ErrorReportContactInfoExcessiveLength': 'Voit syöttää yhteystietoja enintään {0} merkkiä, olet syöttänyt {1} merkkiä.',
  'AddErrorDescription': 'Syötä virheen kuvaus!',
  'ErrorReportDescriptionExcessiveLength': 'Virheen kuvauksen pituus saa olla enintään {0} merkkiä, olet syöttänyt {1} merkkiä.',
  'ErrorReportCreated': 'Viesti tallennettu',
};
Localization.ExerciseMenu = {
  'ExerciseToolTipText': 'Työn tehtävät',
  'ChapterExerciseToolTipText': 'Luvun tehtävät',
};
Localization.Exercises = {
  'DragFromGroupTitle': 'Vedä vastaus tästä sopivaan sarakkeeseen',
  'ChangeButtonText': 'Muuta',
  'DragHerePlaceholder': 'siirrä tähän',
  'SaveButtonText': 'Tallenna',
  'TeachersCommentHeading': 'Kommentti opettajalta {0}',
  'CheckAnswerButtonText': 'Tarkista vastaus',
  'NoAnswerSelectedByStudent': 'Oppilas ei valinnut vastausta',
  'ButtonTextShowMyAnswers': 'Kuvaa minun vastaukseni',
  'MethodologicalTextSectionHeading': 'Huom! Oppilaat eivät näe tätä sisältöyksikköä.',
  'ButtonTextShowStudentsAnswers': 'Kuvaa oppilaan vastaukset',
  'FixMistakesButtonText': 'Korjaa virheet',
  'ExerciseOldCommentWarning': 'Tämä on vanha kommentti opettajalta {0}. Oletko varma, että haluat lähettää tämän kommentin uudestaan?',
  'HideExampleAnswersText': 'Piilota mallivastaus',
  'TryAgainButtonText': 'Aloita alusta',
  'NoAnswerSelectedByYou': 'Et ole valinnut vastausta',
};
Localization.FoxGraph = {
  'ButtonTextLoad': 'Lataa',
};
Localization.Global = {
  'SavedNotificationMessage': 'Tallennettu',
  'LoadingContentMessage': 'Lataan sisältöä…',
  'AjaxErrorSessionExpired': 'Käyttäjän istunto ei ole voimassa!',
  'AjaxErrorNoAccess': 'Käyttäjällä ei ole pääsyä tähän resurssiin!',
  'AjaxErrorSessionChanged': 'Käyttäjän istunto on muuttunut, päivitä sivu!',
  'AjaxErrorNoConnection': 'Yhteys serveriin puuttuu!',
  'DatepickerLanguageCode': 'fi',
  'ConfirmationModalQuestion': 'Oletko varma, että haluat tehdä tämän?',
  'AjaxErrorConcurrency': 'Tietoja on päivitetty, uudista sivua!',
  'AjaxErrorOther': 'Jotain meni pieleen :(',
};
Localization.InvoiceRecipient = {
  'ConfirmClearInvoiceRecipientText': 'Haluatko poistaa laskun vastaanottajan tiedot?',
};
Localization.JoinRegister = {
  'SuccessfullyJoinedRegister': 'Liityit päiväkirjaan!',
};
Localization.JoinSchool = {
  'SuccessfullyJoinedSchool': 'Liittyminen kouluun onnistui!',
};
Localization.KitAddKitToRegisters = {
  'ChooseRegistersPlaceholder': 'Valitse',
  'NotifySuccessMessageAddedToSingleRegister': 'Opetusaineisto liitettiin kurssiin',
  'NotifySuccessMessageAddedToMultipleRegisters': 'Opetusaineisto liitettiin kursseihin',
};
Localization.KitCreateRegisterFromKit = {
  'NotifyErrorMessageDataNotSaved': 'Tietojen tallennus epäonnistui!',
  'ErrorMessageTeacherNotFound': 'Opettajaa ei löytynyt, valitse opettaja luettelosta!',
  'NotifySuccessMessageDataSaved': 'Tiedot on tallennettu!',
};
Localization.KitDetails = {
  'InUseSingleRegister': 'Käytössä 1 kurssissa',
  'InUseRegisters': 'Käytössä {0} kurssissa',
  'RemoveSuccessMessage': 'Teos on poistettu oppimateriaaleista.',
};
Localization.LicensingIndex = {
  'LicenseButtonLicenseNUsersText': 'Myönnä lisenssi {0} käyttäjälle',
  'LicenseButtonLicenseOneUserText': 'Myönnä lisenssi 1 käyttäjälle',
  'LicenseButtonText': 'Myönnä lisenssi',
  'LicenseSelectionPlaceHolder': 'Halutessa valitse lisenssi',
};
Localization.LicensingRemoveLicenses = {
  'ButtonRemoveLicenseNUsersText': 'Poista lisenssi {0} käyttäjältä',
  'LicenseMissing': 'lisenssi puuttuu',
  'RemoveLicenseButtonText': 'Poista',
  'ButtonTooltipNoLicenseSelected': 'Lisenssin poistamiseen on valittava lisenssi, joka käyttäjillä jo on',
  'ChosenLicenseMissing': 'valittu lisenssi puuttuu',
  'ButtonTooltipNoUsersSelected': 'Lisenssin poistamiseen on valittava ensin käyttäjät, joilta lisenssi poistetaan',
  'LicenseSelectionPlaceHolder': 'Halutessa valitse lisenssi',
};
Localization.ManageIndex = {
  'ConfirmationDialog': 'Oletko varma, että haluat tehdä tämän?',
};
Localization.ManageLinkLoginConfirmation = {
  'ConfirmationDialog': 'Oletko varma, että haluat tehdä tämän?',
};
Localization.MediaGallery = {
  'ExitFullscreen': 'Poistu koko näytön tilasta',
  'SendToProjector': 'Lähetä projektoriin',
  'ShowFullscreen': 'Katso koko näytön tilassa',
};
Localization.OrderDetails = {
  'ConfirmationModalMessage': 'Oletko varma, että haluat tehdä tämän?',
  'ReturnToDraftModalBoxTip': 'The order is opened, the school can change the order and confirm it again.',
  'OrderWillBeConfirmedBoxTip': 'The order is being confirmed.',
  'ActionFailedMessage': 'Operation failed.',
  'DeleteOrderCompletelyBoxTip': 'The order will be deleted entirely.',
};
Localization.OrderOrder = {
  'PackageBoxTipText': 'Varmista, että paketti “{0}” sisältää sinua kiinnostavia teoksia, <a href="{1}" class="system-link" target="_blank">tutustu paketin teoksiin tässä</a>.',
  'ErrorMandatoryPackage': 'Paketti tulee olla valittu.',
  'ConfirmationNeededBoxTipMessageSingle': 'Tilauksesi tarkistetaan vahvistuksen jälkeen, koska valitsit paketin {0}. Opiq vahvistaa tilauksen vahvistettuaan alennuksen voimassaolon.',
  'ErrorMustAgreeToTermsAndConditions': 'Tutustu tilausehtoihin ja hyväksy ne.',
  'ErrorPaymentMethodNotSelected': 'Maksutapa tulee olla valittu.',
  'ErrorMandatoryCountry': 'Maa on pakollinen.',
  'ErrorChoosePackage': 'Valitse ensin paketti!',
  'SingleMonth': 'kuukausi',
  'ErrorMandatoryRegisterCode': 'Kaupparekisteritunnus on pakollinen.',
  'DeleteOrderConfimationDialog': 'Oletko varma, että haluat tehdä tämän?',
  'ErrorPackageNotAvailable': 'Tätä pakettia ei voi enää tilata.',
  'ErrorValidFromMustBeGreaterThanValidUntil': 'Alun tulee olla loppua aikaisempi.',
  'PackageNameInQuotes': '”{0}”',
  'ErrorMandatoryTown': 'Postitoimipaikka on pakollinen.',
  'ConfimationDialogDeleteLicenseRow': 'Oletko varma, että haluat tehdä tämän?',
  'ConfirmationNeededBoxTipMessageMultiple': 'Tilauksesi tarkistetaan vahvistuksen jälkeen, koska valitsit paketit {0}. Opiq vahvistaa tilauksen vahvistettuaan alennuksen voimassaolon.',
  'SchoolConfirmationModalTextWithConfirmationNeededPackage': 'Vahvistat tilauksen summan {0}, jonka Opiq tarkistaa. Opiq hyväksyy tilauksen varmistettuaan, että alennus on voimassa. Tilauksesi tarkistaminen voi kestää jonkin aikaa. Kaikki koulun ylläpitäjät saavat tilausvahvistuksen sähköpostiosoitteeseensa.',
  'ErrorMandatoryInvoiceRecipientName': 'Syötä laskun vastaanottajan nimi.',
  'PrivateUserConfirmationModalText': 'Ennen tilauksen vahvistamista varmista, että valittu paketti sisältää sopivat teokset ja voimassaolon alku ja kesto olisivat oikeita.',
  'ProductSummarySingleMonth': 'Opiqin käyttölisenssi ”{0}” voimassa 1 kuukauden ({1}–{2}) hintaan {3}.',
  'MultipleMonths': 'kuukautta',
  'Day': 'päivä',
  'ErrorPaymentScheduleNotCalculated': 'Maksuaikataulu tulee olla laskettu.',
  'ErrorMandatoryLicenseValidUntil': 'Lopun tulee olla valittu.',
  'SingleYear': 'vuosi',
  'ErrorMandatoryLicenseValidFrom': 'Alun tulee olla valittu.',
  'ProductSummaryMultipleMonths': 'Opiqin käyttölisenssi ”{0}” voimassa {1} kuukautta ({2}–{3}) hintaan {4}.',
  'SchoolConfirmationModalText': 'Vahvistat tilauksen summassa {0}, joka on maksettava valittujen maksuehtojen mukaisesti. Tilausvahvistuksen saavat sähköpostiinsa kaikki tämän koulun järjestelmän haltijat.',
  'OverlappingPendingLicensesWarning': 'Paketin ”{0}” voimassaolo {1}–{2} on sama kuin paketin ”{3}” voimassaolo {4}–{5}!',
  'ErrorMandatoryCounty': 'Maakunta on pakollinen.',
  'MultipleYears': 'vuotta',
  'ErrorMandatoryStreetAndHouse': 'Katu ja talon numero ovat pakollisia.',
  'ErrorInvalidEmail': 'Tarkista sähköpostiosoite. Käytä latinalaisia kirjaimia ja symboleita.',
  'ErrorAtLeastOneLicenseMandatory': 'Tilauksessa tulee olla vähintään yksi rivi!',
  'DeleteOrderBoxTip': 'Tilaus poistetaan.',
  'ErrorMandatoryZipCode': 'Postinumero on pakollinen.',
  'ErrorQuantityBiggerThanOne': 'Määrän tulee olla nollaa suurempi.',
  'ErrorMandatoryEmailAddress': 'Syötä sähköpostiosoite.',
};
Localization.PageHeaderComponent = {
  'GenericLicensesTitle': 'Lisenssit',
  'GenericFailedImportsTitle': 'Epäonnistuneet julkaisut',
  'GenericRegistersTitle': 'Kurssit',
  'GenericStudyProgressTitle': 'Kirjanmerkit',
  'GenericSuccessfulImportsTitle': 'Onnistuneet julkaisut',
  'HeaderTitleExerciseNotSavedMessage': 'ei tallennettu',
  'GenericInProgressImportsTitle': 'Julkaistavana olevat teokset',
  'HeaderTitleExerciseSavedMessage': 'tallennettu',
  'GenericOrdersTitle': 'Tilaukset',
  'GenericTasksTitle': 'Tehtävät',
};
Localization.PrivateUserKitIndex = {
  'TOCSetCurrentChapter': 'Aseta kirjanmerkiksi',
  'TOCCurrentChapterTooltip': 'Tämä luku on merkitty kirjanmerkiksi',
  'RemoveSuccessMessage': 'Teos on poistettu oppimateriaaleista.',
};
Localization.RegisterAdminAddRegister = {
  'RegisterErrorMandatoryKit': 'Oppimateriaali on pakollinen.',
  'SubmitButtonTextSaveAndSendInvitation': 'Tallenna ja lähetä kutsut',
  'RegisterErrorMandatoryRegisterName': 'Kurssin nimi on pakollinen.',
};
Localization.RegisterAdminModifyName = {
  'ValidationErrorNotSuccessfulNameModification': 'Kurssin nimen muuttaminen epäonnistui.',
};
Localization.RegisterAdminUpdateKit = {
  'DropdownPlaceholderText': 'Valitse',
};
Localization.RegisterKitSettings = {
  'StudentsPackageRemovedSuccessfully': 'Lisenssin lisääminen on keskeytetty!',
  'ConfirmationModalBody': 'Oletko varma, että haluat tehdä tämän?',
  'ConfirmationModalBoxTip': 'Koodilla liittyminen keskeytetään. Kun koodilla liittyminen aktivoidaan uudelleen, generoidaan kurssille uusi koodi, ja tähänastista koodia ei voi enää käyttää.',
  'NotifyCodeWasCopied': 'Koodi kopioitiin',
};
Localization.RegisterKitTaskResults = {
  'SelectListTextAll': 'Kaikki',
  'TaskTypesSelectionLabelAllTypes': 'Kaikki tyypit',
  'NotifyErrorPeriodHasBeenLimitedToOneYear': 'Kausi ei voi olla pidempi kuin vuosi.',
  'AppliedTaskTypesCountMessage': '{0} valittu',
};
Localization.RegisterLicensing = {
  'ConfirmationModelConfirmText': 'Oletko varma, että haluat lisätä lisenssit oppilaille?',
  'MissingPackagesToShareError': 'Koululla ei ole sopivia lisenssejä.',
};
Localization.RegisterListSchoolAdmin = {
  'SearchButtonSearchingTitle': 'Haen…',
  'UserAutoCompletePrompt': 'Syötä käyttäjän sukunimi',
  'SearchButtonDefaultTitle': 'Etsi',
};
Localization.SchoolSettingsConfirmation = {
  'GenericBindingConfirmationDialog': 'Oletko varma?',
  'ConfirmationDialogAstraSchoolSameAsStuudiumSchool': 'Oletko varma, että Opiqin koulu {0} ja Stuudiumin koulu {1} ovat sama koulu?',
};
Localization.SchoolStudySeasonActivateNextComing = {
  'ConfimationDialogActivateNextComingStudySeason': 'Oletko varma, että haluat aloittaa uuden lukuvuoden? Tämä lukuvuosi suljetaan ja kaikki opintoryhmät ja kurssit arkistoidaan.',
};
Localization.Search = {
  'ExercisesSearchTooltipTextUserLacksRegisters': 'Sinulla pitää tehtäväkokonaisuuden laatimista varten olla vähintään yksi kurssi.',
};
Localization.SolvingExercise = {
  'HeaderTitleExerciseNotSavedMessage': 'ei tallennettu',
  'HeaderTitleExerciseSavedMessage': 'tallennettu',
};
Localization.StudentResultsIndex = {
  'ShowClassAverageButton': 'Näytä luokan keskiarvo',
  'ScoreResultsTooltip': 'Tässä näytetään vain ne tehtäväkokonaisuudet, joiden tuloksena on suoritusprosentti.',
  'HideClassAverageButton': 'Piilota luokan keskiarvo',
  'GradeResultsTooltip': 'Tässä näytetään katsaus vain numeerisesti arvostelluista tehtäväkokonaisuuksista.',
};
Localization.StudentResultsSingleSubject = {
  'NotifyErrorPeriodEndBeforePeriodStart': 'Kauden loppu ei voi olla aiemmin kuin kauden alku.',
  'NotifyErrorPeriodLengthLimitation': 'Kausi ei voi olla pidempi kuin vuosi.',
};
Localization.StudyGroupAdd = {
  'ErrorMandatoryClassNumber': 'Luokan numero on pakollinen.',
  'ErrorNegativeNumber': 'Luokan numeron tulee olla positiivinen perusluku.',
};
Localization.StudyGroupModifyName = {
  'ErrorMandatoryClassNumber': 'Luokan numero on pakollinen.',
  'ErrorNegativeNumber': 'Luokan numeron tulee olla positiivinen perusluku.',
};
Localization.TaskAdd = {
  'NotifySuccessDraftSaved': 'Tehtäväkokonaisuus on tallennettu.',
  'TextReadThroughTheChapter': 'Lue luku ”{0}”.',
  'NotifyErrorTooManyExercisesSelected': 'Yhdessä tehtäväkokonaisuudessa saa olla enintään {0} tehtävää.',
  'NotifySuccessTaskAssigned': 'Tehtäväkokonaisuus on määritelty!',
  'NotifyErrorMandatoryExercise': 'Vähintään yksi tehtävä tulee olla valittu!',
  'NotifyErrorMandatoryRegister': 'Päiväkirjan pitää olla valittuna!',
  'NotifyErrorMandatoryTitle': 'Otsikon tulee olla määritelty!',
  'NotifyErrorMandatoryAddress': 'Tehtäväkokonaisuuden saaja tulee olla valittu!',
  'NotifyErrorMandatoryDeadline': 'Eräpäivä tulee olla määritelty!',
  'ConfimationDialogDeleteDraftTask': 'Oletko varma, että haluat poistaa tehtäväkokonaisuuden luonnoksen?',
  'NotifySuccessTaskDeleted': 'Tehtäväkokonaisuuden luonnos on poistettu!',
};
Localization.TaskAddExercises = {
  'SelectListPlaceholderText': 'Valitse',
  'NotifyExercisesAddedSuccessMessage': 'Tehtävät on lisätty tehtäväkokonaisuuteen',
};
Localization.TaskEvaluationIndex = {
  'StatusRejected': 'Lähetetty takaisin',
  'SaveAndDiscloseButtonScore': 'Anna suoritusprosentti heti',
  'SaveAndDiscloseButtonGrade': 'Anna arvosana heti',
  'TaskRejectedSuccessMessage': 'Tehtäväkokonaisuus on palautettu oppilaalle!',
  'SaveAndDiscloseButtonOtherGrade': 'Anna muu arviointi heti',
  'SaveAndDiscloseButtonFormativeGrade': 'Anna formatiivinen arviointi heti',
  'StatusNotGraded': 'Arvioimatta',
  'StudentMessageHeading': 'Oppilaan viesti:',
  'ButtonTextShowMore': 'Lisää tietoja',
  'ButtonTextShowLess': 'Vähemmän tietoja',
  'ScoreNotDisclosableText': 'Suoritusprosentti ei ole laskettavissa.',
  'StatusNotDisclosed': 'Julkaisematta',
  'DiscloseScoreInfo': 'Julkaise tuloksena oppilaan tehtäväkokonaisuuden suoritusprosentti.',
  'StatusDisclosed': 'Julkaistu',
  'SomeAnswersUncheckedToolTipFormat': '{0} vastausta on tarkistamatta',
  'ValidationMaterialBlockHeadingTeacherRecentAddedMaterial': 'Opettajan viimeksi lisäämä materiaali',
};
Localization.TaskReviewIndex = {
  'ButtonTextDiscloseSelected': 'Julkaise valitut ({0})',
  'ReclaimedAssignedTaskHeading': 'Oppilas pyysi työnsä takaisin',
  'ConfimationDialogDeleteStudentTask': 'Oletko varma, että haluat poistaa oppilaan tehtäväkokonaisuuden? Kun oppilaat ovat jo toteuttaneet tehtävän ja tallentaneet vastaukset, niin nämä vastaukset poistetaan.',
  'LinkCopiedSuccessText': 'Linkki kopioitiin',
  'OnlySubmittedTasksCanBeRejectedErrorMessage': 'Toimitettuja tehtäväkokonaisuuksia voi lähettää takaisin!',
  'ConfimationDialogDeleteTask': 'Oletko varma, että haluat poistaa tehtäväkokonaisuuden? Kun oppilaat ovat jo toteuttaneet tehtävän ja tallentaneet vastaukset, niin nämä vastaukset poistetaan.',
  'TaskWillBeDeletedFromeKoolTip': 'eKoolissa tehtäväkokonaisuutta ei poisteta.',
  'DiscloseWarningMessageForMultipleReclaimedTasks': '{0} oppilasta pyysi työnsä takaisin.',
  'DiscloseWarningConfirmationForOneReclaimedTask': 'Oletko varma, että haluat julkaista työn?',
  'DisclosedTasksCanNotBeDisclosedErrorMessage': 'Jo julkaistuja tehtäväkokonaisuuksia ei tarvitse julkaista uudelleen!',
  'TasksRejectedSuccessMessage': 'Tehtäväkokonaisuudet on palautettu oppilaille!',
  'TaskWillBeDeletedFromstuudiumTip': 'Tehtäväkokonaisuus poistetaan myös Stuudiumista.',
  'DiscloseWarningConfirmationForMultipleReclaimedTasks': 'Oletko varma, että haluat julkaista työt?',
  'ButtonTextRejectSelected': 'Lähetä takaisin ({0})',
  'DiscloseWarningMessageForOneReclaimedTask': 'Oppilas pyysi työnsä takaisin.',
};
Localization.TaskSolvingIndex = {
  'ExerciseAnswerNotSaved': 'Tämän tehtävän vastausta ei ole tallennettu.',
  'AnswerIsTooLong': 'Vastaus on liian pitkä!',
  'ConfirmationDialogSubmitTask': 'Oletko varma, että haluat esittää tehtäväkokonaisuuden?',
  'ChapterNotMarkedRead': 'Kappaletta ei ole merkitty käsitellyksi.',
};
Localization.TaskStatistics = {
  'Tooltip': '{0}<br/>{1}/{2} eli {3}% kaikista töistä',
};
Localization.TeacherDesktopTasks = {
  'Deadline': 'Päivämäärä',
  'ConfirmationDialogRemoveFromDesktop': 'Oletko varma, että haluat poistaa tehtäväkokonaisuuden etusivulta? Tehtäväkokonaisuus löytyy edelleen kurssin tehtäväkokonaisuuden sivulta.',
  'Submitted': 'Lähetetty',
};
Localization.UserDetails = {
  'RemoveLicenseConfirmation': 'Haluatko poistaa käyttäjältä lisenssin?',
  'InvitationSentMessage': 'Kutsu on lähetetty!',
};
Localization.UserMaterial = {
  'NoTextEnteredErrorMessage': 'Syöt teksti.',
  'AddTextHeading': 'Lisää teksti',
  'DeleteTextConfirmationMessage': 'Poistetaanko teksti?',
  'FileUploadFailedErrorMessage': 'Tiedoston tallennus epäonnistui.',
  'DeleteImageConfirmationMessage': 'Poistetaanko kuva?',
  'AddMaterialHeading': 'Lisää materiaali',
  'DeleteFileConfirmationMessage': 'Poistetaanko tiedosto?',
  'SelectFilePrompt': 'Valitse tiedosto.',
  'AddFileHeading': 'Lisää tiedosto',
  'FilesTooLargeErrorMessage': 'Tiedostot {0} ovat liian suuria eikä niitä voi lisätä.',
  'ImgDimensionsTooLargeErrorMessage': 'Kuvan {0} mittakaava on liian iso. Sallittu suurin sivumitta on {1} pikseliä.',
  'UnsupportedFileTypesErrorMessage': 'Tämän tyyppisiä {0} tiedostoja ei voi lisätä. Tiedostotyyppiä ei tueta.',
};
Localization.UsersBatchImport = {
  'HeadingAddedUsers': 'Käyttäjiä lisätty {0}/{1}',
};
Localization.UsersRemove = {
  'RemoveSelectedRolesSingleUser': 'Poista käyttäjältä valitut roolit',
  'DisabledButtonTooltip': 'Roolin poistamiseen on ensin valittava käyttäjät ja rooli, joka poistetaan.',
  'RemoveRoleDefaultText': 'Poista käyttäjiltä rooli',
  'RemoveAllRolesMultipleUsers': 'Poista {0} käyttäjältä kaikki roolit',
  'RemoveSpecificRoleMultipleUsers': 'Poista {0} käyttäjältä rooli ”{1}”',
  'RemoveAllRolesSingleUser': 'Poista käyttäjältä kaikki roolit',
  'RemoveSelectedRolesMultipleUsers': 'Poista {0} käyttäjältä valitut roolit',
  'FromMultipleUsers': '{0} käyttäjältä',
  'FromSingleUser': 'yhdeltä käyttäjältä',
  'RemoveSpecificRoleSingleUser': 'Poista käyttäjältä rooli ”{0}”',
};
