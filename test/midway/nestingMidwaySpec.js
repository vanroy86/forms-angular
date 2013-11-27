describe('formInput', function () {
    var elm, scope, ctrl;

    // load the form code
    beforeEach(angular.mock.module('formsAngular'));

    describe('Nested schemas set button state', function () {

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller, $location, $compile) {
            $httpBackend = _$httpBackend_;
            $httpBackend.whenGET('api/schema/collection').respond({"surname":{"enumValues":[],"regExp":null,"path":"surname","instance":"String","validators":[],"setters":[],"getters":[],"options":{"list":{}},"_index":null,"$conditionalHandlers":{}},"forename":{"enumValues":[],"regExp":null,"path":"forename","instance":"String","validators":[],"setters":[],"getters":[],"options":{"list":true},"_index":null,"$conditionalHandlers":{}},"address.street":{"enumValues":[],"regExp":null,"path":"address.street","instance":"String","validators":[],"setters":[],"getters":[],"options":{},"_index":null,"$conditionalHandlers":{}},"address.town":{"enumValues":[],"regExp":null,"path":"address.town","instance":"String","validators":[],"setters":[],"getters":[],"options":{},"_index":null,"$conditionalHandlers":{}},"studies.courses":{"schema":{"subject":{"enumValues":[],"regExp":null,"path":"subject","instance":"String","validators":[],"setters":[],"getters":[],"options":{},"_index":null,"$conditionalHandlers":{}},"grade":{"enumValues":[],"regExp":null,"path":"grade","instance":"String","validators":[],"setters":[],"getters":[],"options":{},"_index":null,"$conditionalHandlers":{}},"teachers":{"schema":{"teacher":{"path":"teacher","instance":"ObjectID","validators":[],"setters":[],"getters":[],"options":{"ref":"b_using_options"},"_index":null,"$conditionalHandlers":{}},"room":{"path":"room","instance":"Number","validators":[],"setters":[],"getters":[],"options":{},"_index":null,"$conditionalHandlers":{}},"_id":{"path":"_id","instance":"ObjectID","validators":[],"setters":[null],"getters":[],"options":{"auto":true},"_index":null,"$conditionalHandlers":{}}}},"_id":{"path":"_id","instance":"ObjectID","validators":[],"setters":[null],"getters":[],"options":{"auto":true},"_index":null,"$conditionalHandlers":{}}},"options":{"form":{"noRemove":true}}},"studies.exams":{"schema":{"subject":{"enumValues":[],"regExp":null,"path":"subject","instance":"String","validators":[],"setters":[],"getters":[],"options":{},"_index":null,"$conditionalHandlers":{}},"examDate":{"path":"examDate","instance":"Date","validators":[],"setters":[],"getters":[],"options":{},"_index":null,"$conditionalHandlers":{}},"score":{"path":"score","instance":"Number","validators":[],"setters":[],"getters":[],"options":{},"_index":null,"$conditionalHandlers":{}},"result":{"enumValues":["distinction","merit","pass","fail"],"regExp":null,"path":"result","instance":"String","validators":[[null,"`{VALUE}` is not a valid enum value for path `{PATH}`.","enum"]],"setters":[],"getters":[],"options":{"enum":["distinction","merit","pass","fail"]},"_index":null,"$conditionalHandlers":{}},"grader":{"path":"grader","instance":"ObjectID","validators":[],"setters":[],"getters":[],"options":{"ref":"b_using_options"},"_index":null,"$conditionalHandlers":{}},"_id":{"path":"_id","instance":"ObjectID","validators":[],"setters":[null],"getters":[],"options":{"auto":true},"_index":null,"$conditionalHandlers":{}}}},"assistants":{"caster":{"path":"assistants","instance":"ObjectID","validators":[],"setters":[],"getters":[],"options":{"ref":"b_using_options"},"_index":null},"path":"assistants","validators":[],"setters":[],"getters":[],"options":{"type":[{"ref":"b_using_options"}]},"_index":null,"$conditionalHandlers":{}},"_id":{"path":"_id","instance":"ObjectID","validators":[],"setters":[null],"getters":[],"options":{"auto":true},"_index":null,"$conditionalHandlers":{}}});
            $httpBackend.whenGET('api/schema/b_using_options').respond({"surname":{"enumValues":[],"regExp":null,"path":"surname","instance":"String","validators":[[null,"Path `{PATH}` is required.","required"]],"setters":[],"getters":[],"options":{"required":true,"index":true,"list":{}},"_index":true,"isRequired":true,"$conditionalHandlers":{}},"forename":{"enumValues":[],"regExp":null,"path":"forename","instance":"String","validators":[],"setters":[],"getters":[],"options":{"list":true,"index":true},"_index":true,"$conditionalHandlers":{}},"login":{"enumValues":[],"regExp":null,"path":"login","instance":"String","validators":[],"setters":[],"getters":[],"options":{"secure":true,"form":{"hidden":true}},"_index":null,"$conditionalHandlers":{}},"passwordHash":{"enumValues":[],"regExp":null,"path":"passwordHash","instance":"String","validators":[],"setters":[],"getters":[],"options":{"secure":true,"form":{"hidden":true}},"_index":null,"$conditionalHandlers":{}},"address.line1":{"enumValues":[],"regExp":null,"path":"address.line1","instance":"String","validators":[],"setters":[],"getters":[],"options":{"form":{"label":"Address"}},"_index":null,"$conditionalHandlers":{}},"address.line2":{"enumValues":[],"regExp":null,"path":"address.line2","instance":"String","validators":[],"setters":[],"getters":[],"options":{"form":{"label":null}},"_index":null,"$conditionalHandlers":{}},"address.line3":{"enumValues":[],"regExp":null,"path":"address.line3","instance":"String","validators":[],"setters":[],"getters":[],"options":{"form":{"label":null,"add":"class=\"some classes here\""}},"_index":null,"$conditionalHandlers":{}},"address.town":{"enumValues":[],"regExp":null,"path":"address.town","instance":"String","validators":[],"setters":[],"getters":[],"options":{"form":{"label":"Town","placeHolder":"Post town"}},"_index":null,"$conditionalHandlers":{}},"address.postcode":{"enumValues":[],"regExp":null,"path":"address.postcode","instance":"String","validators":[],"setters":[],"getters":[],"options":{"form":{"label":"Postcode","size":"small","help":"Enter your postcode or zip code"}},"_index":null,"$conditionalHandlers":{}},"address.country":{"enumValues":[],"regExp":null,"path":"address.country","instance":"String","validators":[],"setters":[],"getters":[],"options":{"form":{"label":"Country","hidden":true}},"_index":null,"$conditionalHandlers":{}},"address.surveillance":{"path":"address.surveillance","instance":"boolean","validators":[],"setters":[],"getters":[],"options":{"secure":true,"form":{"hidden":true}},"_index":null},"email":{"enumValues":[],"regExp":null,"path":"email","instance":"String","validators":[],"setters":[],"getters":[],"options":{"index":true,"noSearch":true,"form":{"directive":"email-field"}},"_index":true,"$conditionalHandlers":{}},"weight":{"path":"weight","instance":"Number","validators":[],"setters":[],"getters":[],"options":{"form":{"label":"Weight (lbs)"}},"_index":null,"$conditionalHandlers":{}},"eyeColour":{"enumValues":["Blue","Brown","Green","Hazel"],"regExp":null,"path":"eyeColour","instance":"String","validators":[[null,"`{VALUE}` is not a valid enum value for path `{PATH}`.","enum"]],"setters":[],"getters":[],"options":{"enum":["Blue","Brown","Green","Hazel"],"required":false,"form":{"placeHolder":"Select eye colour","select2":{},"help":"This control has had an event handler added to it (which looks horrid - sorry!).  See bottom of <a href=\"/#/index#postprocessing\">home page</a> for details."}},"_index":null,"isRequired":false,"$conditionalHandlers":{}},"dateOfBirth":{"path":"dateOfBirth","instance":"Date","validators":[],"setters":[],"getters":[],"options":{},"_index":null,"$conditionalHandlers":{}},"accepted":{"path":"accepted","instance":"boolean","validators":[[null,"Path `{PATH}` is required.","required"]],"setters":[],"getters":[],"options":{"required":true,"form":{"helpInline":"Did we take them?"},"list":{}},"_index":null,"isRequired":true},"interviewScore":{"path":"interviewScore","instance":"Number","validators":[],"setters":[],"getters":[],"options":{"form":{"hidden":true},"list":{}},"_index":null,"$conditionalHandlers":{}},"freeText":{"enumValues":[],"regExp":null,"path":"freeText","instance":"String","validators":[],"setters":[],"getters":[],"options":{"form":{"type":"textarea","rows":5,"help":"There is some validation on this field to ensure that the word \"rude\" is not entered.  Try it to see the record level error handling."}},"_index":null,"$conditionalHandlers":{}},"resizingText":{"enumValues":[],"regExp":null,"path":"resizingText","instance":"String","validators":[],"setters":[],"getters":[],"options":{"form":{"type":"textarea","rows":"auto","help":"This field resizes thanks to the <a href=\"http://monospaced.github.io/angular-elastic/\">angular-elastic</a> module"}},"_index":null,"$conditionalHandlers":{}},"ipAddress":{"enumValues":[],"regExp":null,"path":"ipAddress","instance":"String","validators":[],"setters":[],"getters":[],"options":{"form":{"hidden":true}},"_index":null,"$conditionalHandlers":{}},"password":{"enumValues":[],"regExp":null,"path":"password","instance":"String","validators":[],"setters":[],"getters":[],"options":{},"_index":null,"$conditionalHandlers":{}},"_id":{"path":"_id","instance":"ObjectID","validators":[],"setters":[null],"getters":[],"options":{"auto":true},"_index":null,"$conditionalHandlers":{}}});
            $httpBackend.whenGET('api/b_using_options').respond([{"_id":"519a6075b320153869b155e0","accepted":true,"email":"ReportingIndex@somewhere.com","eyeColour":"Brown","forename":"John","freeText":"This is a polite thing 1385563125379","interviewScore":89,"ipAddress":"127.0.0.1","surname":"IsAccepted","weight":124,"address":{"line1":"4 High Street","town":"Anytown","postcode":"AB2 3ES"}}]);
            $httpBackend.whenGET('api/collection/123').respond({"_id":123,"surname": "Smith","forename": "John","address.street": "4 High Street","address.town": "Anytown","studies":{"courses":[{"subject":"English","grade":"A","teachers":[]}],"exams":[{"subject":"English","score":67,"result":"merit"}]}});
            elm = angular.element('<div><div form-buttons></div><form-input schema="formSchema"></form-input></div>');
            scope = $rootScope.$new();
            $location.$$path = '/collection/123/edit';
            ctrl = $controller("BaseCtrl", {$scope: scope});
            $httpBackend.flush();
            $compile(elm)(scope);
            scope.$digest();
            }));

        it('disables save button until a change is made', function () {
            expect(scope.isSaveDisabled()).toEqual(true);
        });

        it('disables cancel button until a change is made', function () {
            expect(scope.isCancelDisabled()).toEqual(true);
        });

        it('enables save button when a subDoc is deleted', function () {
            var button = elm.find('.remove-btn:first');
            expect(button.text()).toMatch(/Remove/);
            scope.remove('studies.exams',0,{target:button});
            expect(scope.isSaveDisabled()).toEqual(false);
        });

        it('enables save button when a subDoc is added', function () {
            var button = elm.find('.add-btn:first');
            expect(button.text()).toMatch(/Add/);
            scope.add('studies.exams',{target:button});
            expect(scope.isSaveDisabled()).toEqual(false);
        });

    });

});

