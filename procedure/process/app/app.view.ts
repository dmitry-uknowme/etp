namespace $.$$ {
  export class $etp_procedure_process_app extends $.$etp_procedure_process_app {
    space_opened() {
      return this.$.$mol_state_arg.value("space");
    }

    step_opened() {
      return this.$.$mol_state_arg.value("step");
    }

    @$mol_mem
    space_fund() {
      return this.yard().world().Fund($etp_procedure_process_space);
    }

    @$mol_mem
    space() {
      const id = $mol_int62_string_ensure(this.$.$mol_state_arg.value("space"));
      if (!id) return this.space_new();
      const space = this.space_fund().Item(id);
      console.log({ peers: space.land.peers(), peer: space.land.peer() });
      return space;
    }

    @$mol_action
    space_new() {
      const space = this.space_fund().make([], ["0_0"]);
      this.$.$mol_state_arg.go({ space: space.land.id() });
      return space;
    }

    @$mol_mem
    home() {
      return this.yard().world().home();
    }

    @$mol_mem
    role(next?: $etp_procedure_process_person_role) {
      const Role = $etp_procedure_process_person_role;
      return next || Math.random() > 0.5 ? Role.PARTICIPANT : Role.PARTICIPANT;
      //   return next || Math.random() > 0.5 ? Role.ORGANIZER : Role.PARTICIPANT;
      // newUser.role(Math.random() > 0.5 ? Role.ORGANIZER : Role.PARTICIPANT);
      //   console.log("roleeeeeee", next);
      //   if (next !== undefined) {
      //     this.user().role(next);
      //     return next;
      //   }
      //   //   return "PARTICIPANT";
      //   return this.user().role();
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
      const Role = $etp_procedure_process_person_role;
      return [
        // this.Spaces(),

        ...(this.space()
          ? [
              this.Steps(),
              this.step_opened() === "accepting" ? this.Bids() : void 0,
              this.step_opened() === "reviewing" ? this.Step_review() : void 0,
              this.step_opened() === "summing_up"
                ? this.Step_summing()
                : void 0,
            ]
          : []),
        ...(this.step_opened() === "bid_edit" &&
        this.role() === Role.PARTICIPANT
          ? [this.Bid_edit()]
          : []),
      ];
    }
  }
}
