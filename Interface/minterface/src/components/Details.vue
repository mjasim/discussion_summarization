<template>
  <v-container fluid fill-height>
    <v-layout justify-start>
      <v-flex>
        <v-layout>
          <v-flex row>
            <v-col cols="12" sm="6">
              <v-select
                label="Select a Proposal"
                v-model="default_selected"
                :items="all_proposals"
                item-text="text"
                item-value="value"
                @change="changedProposal"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <div>
                <v-layout id="heatmapHeader" row justify-end>
                  <template v-for="(i, index) in discourses">
                    <span
                      :key="index"
                      style="width: 40px; height: 30px; margin-top: 5%; margin-right: 0.4%; -webkit-transform: rotate(-55deg); -moz-transform: rotate(-55deg); font-size: 12px"
                    >{{i}}</span>
                  </template>
                </v-layout>
              </div>
            </v-col>
          </v-flex>
        </v-layout>
        <v-layout>
          <div style="width: 15%;">
            <b>Proposals</b>
          </div>
          <div style="width: 45%; padding-left:6%">
            <b>Topics</b>
          </div>
          <div style="width: 40%; padding-right:3%">
            <v-layout id="heatmapbox" row justify-end>
              <template v-for="(item, index) in proposal_data.discourses">
                <v-tooltip bottom :key="index">
                  <template v-slot:activator="{on}">
                    <v-btn
                      v-on="on"
                      depressed
                      tile
                      style="margin-left:1%; margin-right:1px; height:40px; min-width: 40px; width:40px; padding: 0px;"
                      :color="item.color"
                      @click="discourseBoxSelected(index)"
                    ></v-btn>
                  </template>
                  <span>{{ item.count }}</span>
                </v-tooltip>
              </template>
            </v-layout>
          </div>
        </v-layout>
        <v-layout>
          <div>
            Next
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Detils",
  data: () => ({
    selected_proposal: localStorage.getItem("proposal"),
    discourses: [
      "Question",
      "Answer",
      "Announcement",
      "Elaboration",
      "Appreciation",
      "Agreement",
      "Disagreement",
      "Negative_reaction",
      "Humor",
      "Other"
    ],
    default_selected: {
      text: localStorage.getItem("proposal"),
      value: localStorage.getItem("proposal")
    },
    details_data: [],
    all_proposals: [],
    proposal_data: []
  }),
  methods: {
    filterData() {
      console.log("filtering on ", this.selected_proposal);
      for (var i in this.details_data) {
        if (this.details_data[i].discussion_name == this.selected_proposal) {
          this.proposal_data = this.details_data[i];
        }
      }
      console.log(this.proposal_data);
    },
    changedProposal: function(label) {
      this.selected_proposal = label;
      this.filterData();
    },
    fetchData() {
      axios.get("/" + "mat_data_cc.json").then(response => {
        this.details_data = response.data;

        console.log(this.details_data);

        for (var i in this.details_data) {
          this.all_proposals.push({
            text: this.details_data[i].discussion_name,
            value: this.details_data[i].discussion_name
          });
        }
        this.filterData();
      });
    }
  },

  created() {
    this.fetchData();
  }
};
</script>
