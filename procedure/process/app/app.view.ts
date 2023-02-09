namespace $.$$ {
  export class $etp_procedure_process_app extends $.$etp_procedure_process_app {
    space_opened() {
      return this.$.$mol_state_arg.value("space");
    }

    step_opened() {
      return this.$.$mol_state_arg.value("step");
    }

    @$mol_mem
    space_auto() {
      const id = $mol_int62_string_ensure(this.$.$mol_state_arg.value("space"));
      if (!id) {
        const newSpace = this.user().space_add();
        this.$.$mol_state_arg.value("space", newSpace.land.id());
        return newSpace;
      }
      console.log("space auto", this.space());
      return this.space();
    }

    auto() {
      this.space_auto();
    }

    space() {
      const fund = this.yard().world().Fund($etp_procedure_process_space);
      return fund.Item(this.space_opened() as $mol_int62_string);
    }

    @$mol_mem
    home() {
      return this.yard().world().home();
    }

    @$mol_mem
    user() {
      const newUser = this.home().chief.yoke(
        "$etp_procedure_process",
        $etp_procedure_process_person
      )!;
      const Role = $etp_procedure_process_person_role;
      newUser.role(Math.random() > 0.5 ? Role.ORGANIZER : Role.PARTICIPANT);
      return newUser;
    }

    role(next?: $etp_procedure_process_person_role) {
      console.log("roleeeeeee", next);
      if (next !== undefined) {
        this.user().role(next);
        return next;
      }
      //   return "PARTICIPANT";
      return this.user().role();
    }

    @$mol_mem
    role_options(): { [key: string]: string } {
      const Role = $etp_procedure_process_person_role;
      return {
        [Role.ORGANIZER]: "Организатор",
        [Role.PARTICIPANT]: "Участник",
      };
    }

    @$mol_mem
    pages() {
      return [
        this.Spaces(),
        ...(this.space()
          ? [
              this.Steps(),
              this.step_opened() === "add" ? this.Bids() : void 0,
              this.step_opened() === "review" ? this.Step_review() : void 0,
              this.step_opened() === "summing_up"
                ? this.Step_summing()
                : void 0,
            ]
          : []),
      ];
    }
  }
}
